import { create } from 'zustand';

export const useProposalStore = create(set => ({
  // ======================
  // State
  // ======================

  proposal: {
    to: '',
    subject: '',
    description: '',
    date: '',
    salutation: 'Dear Sir/Madam',
  },

  projectProposal: {
    title: '',
    intro: '',
    objectives: [{ name: '', description: '' }],
    provision: [{ title: '', content: '' }],
  },

  financialProposal: [
    { particular: '', specification: '', boq: '', description: '', amount: 0 },
  ],

  spoc: {
    name: '',
    designation: '',
    email: '',
    phone: '',
  },

  gallery: [],

  // =======================
  // Generic Updaters
  // =======================

  updateSectionField: (section, field, value) =>
    set(state => ({
      [section]: {
        ...state[section],
        [field]: value,
      },
    })),

  // For nested arrays inside a section (objectives, provision, etc.)
  updateArrayItem: (section, arrayKey, index, field, value) =>
    set(state => {
      const arr = state[section][arrayKey].slice();
      arr[index] = {
        ...arr[index],
        [field]: value,
      };

      return {
        [section]: {
          ...state[section],
          [arrayKey]: arr,
        },
      };
    }),

  addArrayItem: (section, arrayKey, emptyItem) =>
    set(state => ({
      [section]: {
        ...state[section],
        [arrayKey]: [...state[section][arrayKey], emptyItem],
      },
    })),

  removeArrayItem: (section, arrayKey, index) =>
    set(state => ({
      [section]: {
        ...state[section],
        [arrayKey]: state[section][arrayKey].filter((_, i) => i !== index),
      },
    })),

  // =======================
  // Financial Proposal (top-level array)
  // =======================

  updateFinancialItem: (index, field, value) =>
    set(state => {
      const items = state.financialProposal.slice();
      items[index] = {
        ...items[index],
        [field]: field === 'amount' ? Number(value) || 0 : value,
      };
      return { financialProposal: items };
    }),

  addFinancialItem: () =>
    set(state => ({
      financialProposal: [
        ...state.financialProposal,
        { particular: '', description: '', amount: 0 },
      ],
    })),

  removeFinancialItem: index =>
    set(state => ({
      financialProposal: state.financialProposal.filter((_, i) => i !== index),
    })),

  // =======================
  // Gallery (RN-safe)
  // =======================

  setGallery: photos =>
    set(() => ({
      gallery: Array.isArray(photos) ? photos.slice(0, 8) : [],
    })),

  addToGallery: photo =>
    set(state => ({
      gallery: [...state.gallery, photo].slice(0, 8),
    })),

  removeFromGallery: index =>
    set(state => ({
      gallery: state.gallery.filter((_, i) => i !== index),
    })),

  // =======================
  // Reset (optional)
  // =======================

  resetStore: () =>
    set(() => ({
      proposal: {
        to: '',
        subject: '',
        description: '',
        date: '',
        salutation: 'Dear Sir/Madam',
      },
      projectProposal: {
        title: '',
        intro: '',
        objectives: [{ name: '', description: '' }],
        provision: [{ title: '', content: '' }],
      },
      financialProposal: [{ particular: '', description: '', amount: 0 }],
      gallery: [],
      spoc: {
        name: '',
        designation: '',
        email: '',
        phone: '',
      },
    })),
}));
