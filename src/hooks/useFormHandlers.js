import { useState, useCallback } from 'react';

/**
 * A simple form helper that cracks the repeated boilerplate out of
 * the various step forms used in both the proposal and report flows.
 *
 * The caller is responsible for passing in the current data object from
 * state, a function that updates a single field, and a list of keys that
 * must be present when the form is validated.
 *
 * It returns the error bag, a change handler that clears the error for the
 * changed field, and a `submit` function that will run the supplied
 * navigation callbacks based on the `isLastStep` flag.
 *
 * Example usage (see refactored forms for concrete examples):
 *
 *   const { errors, handleChange, handleSubmit } = useForm({
 *     data: projectOverview,
 *     updateField: (f, v) => updateSectionField('projectOverview', f, v),
 *     requiredFields: [ 'projectTitle', 'location', ... ],
 *     isLastStep,
 *     nextStep,
 *     generatePDF,
 *   });
 *
 */
export function useForm({
  data = {},
  updateField,
  requiredFields = [],
  isLastStep = false,
  nextStep = () => {},
  generatePDF = () => {},
  extraValidate, // optional callback that returns an errors object
}) {
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(
    (field, value) => {
      if (typeof updateField === 'function') {
        updateField(field, value);
      }

      setErrors(prev => {
        if (!prev[field]) return prev;
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    },
    [updateField],
  );

  const validate = useCallback(() => {
    const newErrors = {};

    requiredFields.forEach(field => {
      if (!data[field] || String(data[field]).trim() === '') {
        newErrors[field] = 'This field is required';
      }
    });

    if (typeof extraValidate === 'function') {
      const extra = extraValidate(data) || {};
      Object.assign(newErrors, extra);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [data, requiredFields, extraValidate]);

  const handleSubmit = useCallback(() => {
    if (validate()) {
      if (isLastStep) {
        generatePDF();
      } else {
        nextStep();
      }
    }
  }, [validate, isLastStep, nextStep, generatePDF]);

  return { errors, handleChange, handleSubmit };
}
