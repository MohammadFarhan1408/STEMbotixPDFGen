import React from 'react';
import { StyleSheet } from 'react-native';
import { useReportStore } from '@/store/reportStore';

// Form handling hook
import { useForm } from '@/hooks/useFormHandlers';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import Input from '@/components/ui/Input';
import DateField from '@/components/ui/DateField';
import ButtonGroup from '@/components/ui/ButtonGroup';

const ProjectForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const projectOverview = useReportStore(state => state.projectOverview);
  const updateProjectOverview = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: projectOverview,
    updateField: (field, value) =>
      updateProjectOverview('projectOverview', field, value),
    requiredFields: [
      'projectTitle',
      'projectDescription',
      'implementingOrganization',
      'partnerSponsor',
      'projectDuration',
      'location',
      'targetBeneficiaries',
      'problemStatement',
      'startDate',
      'endDate',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Project Overview" />

        <Input
          label="Project Title"
          value={projectOverview.projectTitle}
          placeholder="Enter a descriptive project name"
          error={errors.projectTitle}
          onChangeText={text => handleChange('projectTitle', text)}
        />

        <Input
          label="Project Description"
          value={projectOverview.projectDescription}
          placeholder="Describe the project in detail"
          error={errors.projectDescription}
          onChangeText={text => handleChange('projectDescription', text)}
        />

        <Input
          label="Implementing Organization"
          fieldName="implementingOrganization"
          value={projectOverview.implementingOrganization}
          placeholder="Enter organization name"
          error={errors.implementingOrganization}
          onChangeText={text => handleChange('implementingOrganization', text)}
        />

        <Input
          label="Partner / Sponsor"
          fieldName="partnerSponsor"
          value={projectOverview.partnerSponsor}
          placeholder="Enter partner or sponsor"
          error={errors.partnerSponsor}
          onChangeText={text => handleChange('partnerSponsor', text)}
        />

        <Input
          label="Project Duration (Months)"
          fieldName="projectDuration"
          value={projectOverview.projectDuration}
          type="number"
          placeholder="e.g. 12"
          keyboardType="numeric"
          error={errors.projectDuration}
          onChangeText={text => handleChange('projectDuration', text)}
        />

        <Input
          label="Location"
          fieldName="location"
          value={projectOverview.location}
          placeholder="Enter location"
          error={errors.location}
          onChangeText={text => handleChange('location', text)}
        />

        <DateField
          label="Start Date"
          fieldName="startDate"
          value={projectOverview.startDate}
          placeholder="Select start date"
          error={errors.startDate}
          onChange={date => handleChange('startDate', date)}
        />

        <DateField
          label="End Date"
          fieldName="endDate"
          value={projectOverview.endDate}
          placeholder="2026-12-31"
          error={errors.endDate}
          onChange={date => handleChange('endDate', date)}
        />

        <Input
          label="Target Beneficiaries"
          fieldName="targetBeneficiaries"
          value={projectOverview.targetBeneficiaries}
          placeholder="Describe target beneficiaries"
          error={errors.targetBeneficiaries}
          onChangeText={text => handleChange('targetBeneficiaries', text)}
        />

        <Input
          label="Problem Statement"
          fieldName="problemStatement"
          value={projectOverview.problemStatement}
          placeholder="Describe the challenges..."
          multiline={true}
          error={errors.problemStatement}
          onChangeText={text => handleChange('problemStatement', text)}
        />

        {/* Navigation Buttons */}
        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleSubmit}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default ProjectForm;

const styles = StyleSheet.create({});
