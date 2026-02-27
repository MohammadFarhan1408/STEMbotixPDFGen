import { useState, useCallback } from 'react';
import * as XLSX from 'xlsx';
import RNFS from 'react-native-fs';

export const useExcelParser = onComplete => {
  const [isProcessing, setIsProcessing] = useState(false);

  const normalizeReceived = useCallback(value => {
    if (value === true) return true;
    if (value === false) return false;
    if (value == null) return false;
    if (typeof value === 'number') return value === 1;
    if (typeof value === 'string')
      return ['true', 'yes', '1', 'y'].includes(value.toLowerCase().trim());

    try {
      const s = String(value).toLowerCase().trim();
      return ['true', 'yes', '1', 'y'].includes(s);
    } catch (e) {
      return false;
    }
  }, []);

  const parseFile = useCallback(
    async file => {
      if (!file?.uri) return;

      setIsProcessing(true);

      try {
        // Read file as base64
        const base64 = await RNFS.readFile(file.uri, 'base64');

        const workbook = XLSX.read(base64, { type: 'base64' });
        const sheetName = workbook.SheetNames?.[0];

        if (!sheetName) {
          onComplete && onComplete([]);
          return;
        }

        const worksheet = workbook.Sheets[sheetName];

        const rows = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
          defval: '',
        });

        if (rows.length <= 1) {
          onComplete && onComplete([]);
          return;
        }

        const header = rows[0].map(h => String(h).trim());
        const dataRows = rows.slice(1);

        const nameIdx = header.findIndex(h => /item\s*name|name/i.test(h));
        const qtyIdx = header.findIndex(h => /qty|quantity/i.test(h));
        const recvIdx = header.findIndex(h =>
          /received|is\s*received/i.test(h),
        );

        const result = [];

        for (let i = 0; i < dataRows.length; i++) {
          const row = dataRows[i];
          if (!row) continue;

          const name = row[nameIdx] || '';
          if (!name) continue;

          result.push({
            id: result.length + 1,
            itemName: String(name).trim(),
            quantity: Number(row[qtyIdx]) || 0,
            received: normalizeReceived(row[recvIdx]),
          });
        }

        onComplete && onComplete(result);
      } catch (err) {
        console.error('Failed to parse Excel file:', err);
        onComplete && onComplete([]);
      } finally {
        setIsProcessing(false);
      }
    },
    [normalizeReceived, onComplete],
  );

  return { parseFile, isProcessing };
};
