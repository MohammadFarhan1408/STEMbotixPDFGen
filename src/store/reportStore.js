import { create } from 'zustand';

export const useReportStore = create(set => ({
  // =======================
  // State
  // =======================
  sections: {
    economicImpact: true,
    caseStudy: true,
  },

  projectOverview: {
    projectTitle: '',
    implementingOrganization: '',
    partnerSponsor: '',
    projectDuration: '',
    location: '',
    targetBeneficiaries: '',
    problemStatement: '',
    startDate: null,
    endDate: null,
  },

  objectives: {
    primaryObjectives: '',
    secondaryObjectives: '',
    shortTermOutcomes: '',
    longTermOutcomes: '',
    sdgAlignment: '',
  },

  beneficiaryProfile: {
    totalBeneficiaries: 0,
    ageGroup: '',
    genderDistribution: {
      female: 0,
      male: 0,
      other: 0,
    },
    educationBackground: '',
    socioEconomicBackground: '',
    geographicCoverage: '',
  },

  baselineEndline: [
    {
      parameter: '',
      baselineValue: 0,
      endlineValue: 0,
      percentChange: 0,
    },
  ],

  quantitativeImpact: {
    participantsTrained: 0,
    attendanceRate: 0,
    completionRate: 0,
    certificationsAchieved: 0,
    assessmentImprovement: 0,
  },

  qualitativeImpact: {
    confidenceImprovement: '',
    leadershipSkills: '',
    teamwork: '',
    criticalThinking: '',
    testimonials: '',
  },

  learningOutcomes: {
    technicalSkillsGained: '',
    softSkillsDeveloped: '',
    toolsPlatformsUsed: '',
    handsOnLearningHours: 0,
  },

  institutionalImpact: {
    teacherCapacityBuilding: '',
    infrastructureUse: '',
    curriculumEnhancement: '',
    sustainabilityMeasures: '',
  },

  socialImpact: {
    inclusionAndEquity: '',
    communityEngagement: '',
    awarenessPrograms: '',
    digitalDivideReduction: '',
  },

  economicImpact: {
    employabilityEnhancement: '',
    incomeOpportunities: '',
    costPerBeneficiary: '',
    roi: '',
  },

  innovationImpact: {
    newTechnologies: '',
    innovationProjects: '',
    research: '',
  },

  caseStudy: {
    beneficiaryBackground: '',
    interventionDetails: '',
    outcomeAchieved: '',
    testimonial: '',
  },

  challengesAndLearnings: {
    keyChallenges: '',
    mitigationStrategies: '',
    lessonsLearned: '',
  },

  sustainability: {
    continuationPlan: '',
    scalabilityPotential: '',
    replicationPossibilities: '',
  },

  monitoringEvaluation: {
    dataCollectionTools: '',
    assessmentMethods: '',
    monitoringFrequency: '',
  },

  conclusion: {
    summaryOfImpact: '',
    keyTakeaways: '',
    recommendations: '',
  },

  photographs: [],

  // =======================
  // Generic Updaters
  // =======================

  setSections: newSections =>
    set(state => ({
      sections: { ...state.sections, ...newSections },
    })),

  updateSectionField: (section, field, value) =>
    set(state => ({
      [section]: {
        ...state[section],
        [field]: value,
      },
    })),

  // For nested object: beneficiaryProfile.genderDistribution for example
  updateNestedField: (section, nestedKey, field, value) =>
    set(state => ({
      [section]: {
        ...state[section],
        [nestedKey]: {
          ...state[section][nestedKey],
          [field]: value,
        },
      },
    })),

  // =======================
  // Baseline / Endline
  // =======================

  updateBaselineEndline: (index, field, value) =>
    set(state => ({
      baselineEndline: state.baselineEndline.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    })),

  addBaselineEndlineRow: () =>
    set(state => ({
      baselineEndline: [
        ...state.baselineEndline,
        {
          parameter: '',
          baselineValue: 0,
          endlineValue: 0,
          percentChange: 0,
        },
      ],
    })),

  removeBaselineEndlineRow: index =>
    set(state => ({
      baselineEndline: state.baselineEndline.filter((_, i) => i !== index),
    })),

  // =======================
  // Photographs (RN-safe)
  // =======================

  setPhotographs: photos =>
    set(() => ({
      photographs: Array.isArray(photos) ? photos.slice(0, 8) : [],
    })),

  addPhotograph: photo =>
    set(state => ({
      photographs: [...state.photographs, photo].slice(0, 8),
    })),

  removePhotograph: index =>
    set(state => ({
      photographs: state.photographs.filter((_, i) => i !== index),
    })),

  // =======================
  // Reset (optional but useful)
  // =======================

  resetStore: () =>
    set(() => ({
      sections: {
        economicImpact: true,
        caseStudy: true,
      },
      projectOverview: {
        projectTitle: '',
        implementingOrganization: '',
        partnerSponsor: '',
        projectDuration: '',
        location: '',
        targetBeneficiaries: '',
        problemStatement: '',
        startDate: null,
        endDate: null,
      },
      objectives: {
        primaryObjectives: '',
        secondaryObjectives: '',
        shortTermOutcomes: '',
        longTermOutcomes: '',
        sdgAlignment: '',
      },
      beneficiaryProfile: {
        totalBeneficiaries: 0,
        ageGroup: '',
        genderDistribution: {
          female: 0,
          male: 0,
          other: 0,
        },
        educationBackground: '',
        socioEconomicBackground: '',
        geographicCoverage: '',
      },
      baselineEndline: [
        {
          parameter: '',
          baselineValue: 0,
          endlineValue: 0,
          percentChange: 0,
        },
      ],
      quantitativeImpact: {
        participantsTrained: 0,
        attendanceRate: 0,
        completionRate: 0,
        certificationsAchieved: 0,
        assessmentImprovement: 0,
      },
      qualitativeImpact: {
        confidenceImprovement: '',
        leadershipSkills: '',
        teamwork: '',
        criticalThinking: '',
        testimonials: '',
      },
      learningOutcomes: {
        technicalSkillsGained: '',
        softSkillsDeveloped: '',
        toolsPlatformsUsed: '',
        handsOnLearningHours: 0,
      },
      institutionalImpact: {
        teacherCapacityBuilding: '',
        infrastructureUse: '',
        curriculumEnhancement: '',
        sustainabilityMeasures: '',
      },
      socialImpact: {
        inclusionAndEquity: '',
        communityEngagement: '',
        awarenessPrograms: '',
        digitalDivideReduction: '',
      },
      economicImpact: {
        employabilityEnhancement: '',
        incomeOpportunities: '',
        costPerBeneficiary: '',
        roi: '',
      },
      innovationImpact: {
        newTechnologies: '',
        innovationProjects: '',
        research: '',
      },
      caseStudy: {
        beneficiaryBackground: '',
        interventionDetails: '',
        outcomeAchieved: '',
        testimonial: '',
      },
      challengesAndLearnings: {
        keyChallenges: '',
        mitigationStrategies: '',
        lessonsLearned: '',
      },
      sustainability: {
        continuationPlan: '',
        scalabilityPotential: '',
        replicationPossibilities: '',
      },
      monitoringEvaluation: {
        dataCollectionTools: '',
        assessmentMethods: '',
        monitoringFrequency: '',
      },
      conclusion: {
        summaryOfImpact: '',
        keyTakeaways: '',
        recommendations: '',
      },
      photographs: [],
    })),
}));
