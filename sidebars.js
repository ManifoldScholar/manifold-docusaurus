module.exports = {
  docs: [
      'overview',
      {
        'Administering Manifold': [
            'administering/hosting',
            'administering/installation',
            'administering/managing_services',
            'administering/storage',
          {
            Updating: [
              'administering/updating/updating_instructions',
              'administering/updating/release_notes',
            ]
          },
            'administering/backup_restore',
            'administering/troubleshooting',
            'administering/securing_manifold',
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
            Reference: [
              'administering/reference/environment_variables',
              'administering/reference/api_rake_tasks',
              'administering/reference/omnibus_reference',
              'administering/reference/downloads',
            ]
          },
        ]
      },
      {
        'Using Manifold': [
            'using/manifold_library',
            'using/your_account',
            'using/manifold_projects',
            'using/reading_manifold',
            'using/reading_groups',
        ]
      },
      {
        'Manifold Backend': [
            'backend/projects',
            'backend/project_collections',
            'backend/texts',
            'backend/resource',
            'backend/resource_collections',
            'backend/users',
            'backend/makers',
            'backend/pages',
            'backend/analytics',
            'backend/metadata',
        ]
      },
      {
        Developers: [
            'developers/development_environment',
            'developers/contributing',
            'developers/tests',
            'developers/api',
        ]
      },
  ],
  walkthroughs: [
    'walkthroughs/landing',
  ],
  guides: [
    'guides/landing',
  ]

}
