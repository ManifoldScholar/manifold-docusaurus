import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'overview',
    'accessibility',
    {
      'Administering Manifold': [
          'administering/hosting',
          'administering/installation',
          'administering/upgrading',
          { 'Release Notes': [
              { type: 'link', href: '/manifold-docusaurus/docs/administering/release_notes/v8x', label: "Latest" },
              'administering/release_notes/v8x',
              'administering/release_notes/v7x',
              'administering/release_notes/v6x',
            ]
          },
          'administering/managing_services',
          'administering/storage',
          'administering/backup_restore',
          'administering/troubleshooting',
          'administering/securing_manifold',
          { 'Mitigating Spam': [
            'administering/spam',
            'administering/readingGroups_be',
            'administering/annoComments_be',
            'administering/resolvingFlags',
            'administering/bulkActions',
            ]
          },
        {
          'Configuring Settings': [
            'administering/configuring/managing_settings',
            'administering/configuring/properties',
            'administering/configuring/theme_settings',
            'administering/configuring/integration_settings',
            'administering/configuring/ingestion_settings',
            'administering/configuring/project_subjects',
            'administering/configuring/email_settings',
            'administering/configuring/export_targets',
          ]
        },
        {
          'Reference': [
            'administering/reference/environment_variables',
            'administering/reference/api_rake_tasks',
            'administering/reference/downloads',
          ]
        },
      ]
    },
    {
      'Using Manifold': [
          'using/manifold_library',
          'using/your_account',
          'using/privacy_settings',
          'using/manifold_projects',
          'using/reading_manifold',
          'using/collecting_content',
          'using/reading_groups',
      ]
    },
    {
      'Manifold Backend': [
          'backend/projects',
          'backend/project_collections',
          'backend/journals',
          'backend/texts',
          'backend/manifold_editor',
          'backend/resource',
          'backend/resource_collections',
          'backend/users',
          'backend/makers',
          'backend/features',
          'backend/pages',
          'backend/entitlements',
          'backend/analytics',
          'backend/metadata',
      ]
    },
    {
      'Developers': [
          'developers/local_development',
          'developers/api',
      ]
    },
  ],
  walkthroughs: [
      'walkthroughs/landing',
      {
        'First Steps': [
            'walkthroughs/create_account',
            'walkthroughs/login',
            'walkthroughs/profile',
            'walkthroughs/notifications',
            'walkthroughs/access_backend',
        ]
      },
      {
        'Reading in Manifold': [
          'walkthroughs/visibility',
          'walkthroughs/reader_settings',
          // 'walkthroughs/annotating',
          // 'walkthroughs/commenting',
          // 'walkthroughs/create_rg',
          // 'walkthroughs/join_rg',
          // 'walkthroughs/add_rg',
          // 'walkthroughs/curate_rg',
          // 'walkthroughs/collecting',
        ]
      },
      {
        'Working in Manifold': [
          'walkthroughs/making_project',
          'walkthroughs/placing_resource',
          'walkthroughs/word_mammoth',
          'walkthroughs/html_setup',
          'walkthroughs/manifest',
          // 'walkthroughs/adding_collaborators',
          // 'walkthroughs/adding_text',
          // 'walkthroughs/adding_authors',
          // 'walkthroughs/assign_authors',
          // 'walkthroughs/curate_authors',
          // 'walkthroughs/adding_resource',
          // 'walkthroughs/bulkadd_resource',
          // 'walkthroughs/add_categories',
          // 'walkthroughs/using_categories',
          // 'walkthroughs/ordering_contentblocks',
          // 'walkthroughs/customizing_hero',
        ]
      }
  ],
  guides: [
    'guides/landing',
  ]
};

export default sidebars;
