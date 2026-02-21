import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useProposalStore } from '../../../store/proposalStore';
import { useForm } from '@/hooks/useFormHandlers';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ButtonGroup from '@/components/ui/ButtonGroup';

const ProjectProposalForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
  isGenerating = false,
}) => {
  const proposal = useProposalStore(state => state.projectProposal);

  const updateSectionField = useProposalStore(
    state => state.updateSectionField,
  );
  const updateArrayItem = useProposalStore(state => state.updateArrayItem);
  const addArrayItem = useProposalStore(state => state.addArrayItem);
  const removeArrayItem = useProposalStore(state => state.removeArrayItem);

  const { title, intro, objectives, provision } = proposal;

  const {
    errors: hookErrors,
    handleChange,
    handleSubmit,
  } = useForm({
    data: proposal,
    updateField: (field, value) =>
      updateSectionField('projectProposal', field, value),
    requiredFields: ['title', 'intro'],
    isLastStep,
    nextStep,
    generatePDF,
    extraValidate: data => {
      const e = {};
      data.provision.forEach((item, i) => {
        if (!item.title || String(item.title).trim() === '') {
          e[`provision_title_${i}`] = 'Service title is required';
        }
        if (!item.content || String(item.content).trim() === '') {
          e[`provision_content_${i}`] = 'Service content is required';
        }
      });
      data.objectives.forEach((obj, i) => {
        if (!obj.name || String(obj.name).trim() === '') {
          e[`objectives_name_${i}`] = 'Objective title is required';
        }
        if (!obj.description || String(obj.description).trim() === '') {
          e[`objectives_description_${i}`] =
            'Objective description is required';
        }
      });
      return e;
    },
  });

  /* =========================
     FIELD CHANGE (ARRAY)
  ========================== */
  const handleArrayChange = (section, index, field, value) => {
    updateArrayItem('projectProposal', section, index, field, value);

    const key = `${section}_${field}_${index}`;

    // also clear error from hookState
    handleChange(key, value);
  };

  /*
     old validation logic replaced by hook via extraValidate above
  */

  // use hook-provided handleSubmit directly

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Project Proposal" />

        {/* TITLE */}
        <Input
          label="Title"
          value={title}
          placeholder="Enter project title"
          error={hookErrors.title}
          onChangeText={text => handleChange('title', text)}
        />

        {/* INTRO */}
        <Input
          label="Intro"
          value={intro}
          placeholder="Short introduction"
          maxLength={150}
          error={hookErrors.intro}
          onChangeText={text => handleChange('intro', text)}
        />

        {/* PROVISION */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Provision</Text>

          {provision.map((item, i) => (
            <View key={i} style={[styles.listCard, styles.provisionCard]}>
              <Input
                placeholder="Service Title"
                value={item.title}
                error={hookErrors[`provision_title_${i}`]}
                onChangeText={text =>
                  handleArrayChange('provision', i, 'title', text)
                }
              />

              <Input
                placeholder="Service Content"
                value={item.content}
                multiline
                error={hookErrors[`provision_content_${i}`]}
                onChangeText={text =>
                  handleArrayChange('provision', i, 'content', text)
                }
              />

              {provision.length > 1 && (
                <View style={styles.removeRow}>
                  <Button
                    title="Remove"
                    variant="danger"
                    onPress={() =>
                      removeArrayItem('projectProposal', 'provision', i)
                    }
                  />
                </View>
              )}
            </View>
          ))}

          <Button
            title="+ Add Provision"
            variant="outline"
            onPress={() =>
              addArrayItem('projectProposal', 'provision', {
                title: '',
                content: '',
              })
            }
          />
        </View>

        {/* OBJECTIVES */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Objectives</Text>

          {objectives.map((obj, i) => (
            <View key={i} style={[styles.listCard, styles.objectiveCard]}>
              <Input
                placeholder="Objective Title"
                value={obj.name}
                error={hookErrors[`objectives_name_${i}`]}
                onChangeText={text =>
                  handleArrayChange('objectives', i, 'name', text)
                }
              />

              <Input
                placeholder="Objective Description"
                value={obj.description}
                multiline
                error={hookErrors[`objectives_description_${i}`]}
                onChangeText={text =>
                  handleArrayChange('objectives', i, 'description', text)
                }
              />

              {objectives.length > 1 && (
                <View style={styles.removeRow}>
                  <Button
                    title="Remove"
                    variant="danger"
                    onPress={() =>
                      removeArrayItem('projectProposal', 'objectives', i)
                    }
                  />
                </View>
              )}
            </View>
          ))}

          <Button
            title="+ Add Objective"
            variant="outline"
            onPress={() =>
              addArrayItem('projectProposal', 'objectives', {
                name: '',
                description: '',
              })
            }
          />
        </View>

        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleSubmit}
          isGenerating={isGenerating}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default ProjectProposalForm;

const styles = StyleSheet.create({
  sectionBlock: {
    marginTop: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#333',
  },
  listCard: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
  },
  provisionCard: {
    borderColor: '#93c5fd',
    backgroundColor: '#eff6ff',
  },
  objectiveCard: {
    borderColor: '#86efac',
    backgroundColor: '#f0fdf4',
  },
  removeRow: {
    marginTop: 6,
    alignItems: 'flex-end',
  },
});
