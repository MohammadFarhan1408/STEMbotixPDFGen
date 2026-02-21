import { baselineStyles } from '../styles/baselineStyles';

export const BaselineEndlineSection = data => {
  const list = data?.baselineEndline || [];

  const rows =
    list.length > 0
      ? list
          .map(item => {
            const positive = item.percentChange >= 0;
            return `
              <tr>
                <td class="param">${item.parameter}</td>
                <td>${item.baselineValue}</td>
                <td>${item.endlineValue}</td>
                <td class="${positive ? 'pos' : 'neg'}">
                  ${positive ? '+' : ''}${item.percentChange}%
                </td>
              </tr>
            `;
          })
          .join('')
      : `<tr><td colspan="4">No comparison data available.</td></tr>`;

  return `
    ${baselineStyles}

    <div class="intro">
      The following comparison highlights measurable progress during intervention.
    </div>

    <table class="data-table">
      <thead>
        <tr>
          <th>PARAMETER</th>
          <th>BASELINE</th>
          <th>ENDLINE</th>
          <th>% CHANGE</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <div class="summary">
      <strong>Data Interpretation:</strong>
      Positive percentage indicates improvement post-intervention.
    </div>
  `;
};
