<?php

namespace Drupal\events_module\Form;

use Drupal\Core\Database\Database;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Exception;

/**
 * Defines a form that configures events_module's settings.
 */
class ModuleConfigurationForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'events_module_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'events_module.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('events_module.settings');
    $form['home_events_text'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Teksts, kas rādīsies sākumlapā virs notikumiem'),
      '#default_value' => $config->get('home_events_text'),
    ];
    $form['events_no_results_text'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Teksts, kas rādīsies notikumu skatā, ja nav rezultātu'),
      '#default_value' => $config->get('events_no_results_text'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    
    $config = $this->config('events_module.settings');
    $values = $form_state->getValues();

    $config->set('home_events_text', $values['home_events_text']);
    $config->set('events_no_results_text', $values['events_no_results_text']);
    $config->save();
    
    parent::submitForm($form, $form_state);
  }
}