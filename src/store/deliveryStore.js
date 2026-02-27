import { create } from 'zustand';

export const useDeliveryStore = create(set => ({
  // ======================
  // State
  // ======================

  deliveryBasicInfo: {
    date: '',
    referenceNo: '',
    subject: '',
    purchaseOrderNo: '',
    purchaseOrderDate: '',
    projectName: '',
  },

  schoolDelivery: {
    schoolName: '',
    schoolAddress: '',
    deliveredAndInstalledBy: '',
    deliveredByContactNo: '',
    receivedBy: '',
    receivedByContactNo: '',
  },

  itemChecklist: [
    // { id, itemName, quantity, received }
  ],
  setItems: items => set({ items }),
  verification: {
    schoolAuthorityName: '',
    schoolAuthorityDesignation: '',
    stembotixRepresentativeName: '',
    yuvaCoordinatorName: '',
    verificationDate: '',
  },

  serialNumbers: {
    printers: [''],
    laptops: [''],
  },

  // ======================
  // Generic Updaters
  // ======================

  updateSectionField: (section, field, value) =>
    set(state => ({
      [section]: {
        ...state[section],
        [field]: value,
      },
    })),

  // ======================
  // Item Checklist
  // ======================

  setItemListFromExcel: items =>
    set(() => ({
      itemChecklist: Array.isArray(items) ? items : [],
    })),

  updateChecklistItem: (id, received) =>
    set(state => ({
      itemChecklist: state.itemChecklist.map(item =>
        item.id === id ? { ...item, received } : item,
      ),
    })),

  // ======================
  // Serial Numbers
  // ======================

  updateSerial: (type, index, value) =>
    set(state => {
      const updated = state.serialNumbers[type].slice();
      updated[index] = value;

      return {
        serialNumbers: {
          ...state.serialNumbers,
          [type]: updated,
        },
      };
    }),

  addSerial: type =>
    set(state => ({
      serialNumbers: {
        ...state.serialNumbers,
        [type]: [...state.serialNumbers[type], ''],
      },
    })),

  removeSerial: (type, index) =>
    set(state => {
      const updated = state.serialNumbers[type].filter((_, i) => i !== index);

      return {
        serialNumbers: {
          ...state.serialNumbers,
          [type]: updated.length ? updated : [''], // keep at least 1
        },
      };
    }),

  // ======================
  // Reset (optional)
  // ======================

  resetStore: () =>
    set(() => ({
      deliveryBasicInfo: {
        date: '',
        referenceNo: '',
        subject: '',
        purchaseOrderNo: '',
        purchaseOrderDate: '',
        projectName: '',
      },
      schoolDelivery: {
        schoolName: '',
        schoolAddress: '',
        deliveredAndInstalledBy: '',
        deliveredByContactNo: '',
        receivedBy: '',
        receivedByContactNo: '',
      },
      itemChecklist: [],
      verification: {
        schoolAuthorityName: '',
        schoolAuthorityDesignation: '',
        stembotixRepresentativeName: '',
        yuvaCoordinatorName: '',
        verificationDate: '',
      },
      serialNumbers: {
        printers: [''],
        laptops: [''],
      },
    })),
}));
