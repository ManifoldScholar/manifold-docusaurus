module.exports = {
  docs: [
      'overview',
      {
        'Administering Manifold': [
            'administering/hosting',
            'administering/installation',
            'administering/upgrading',
            { 'Release Notes': [
                { type: 'link', href: '/manifold-docusaurus/docs/administering/release_notes/v6x', label: "Latest" },
                'administering/release_notes/v6x',
              ]
            },
            'administering/managing_services',
            'administering/storage',
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
            'backend/features',
            'backend/pages',
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
          // 'walkthroughs/adding_collaborators',
          // 'walkthroughs/adding_text',
          'walkthroughs/html_setup',
          'walkthroughs/manifest',
          // 'walkthroughs/adding_authors',
          // 'walkthroughs/assign_authors',
          // 'walkthroughs/curate_authors',
          // 'walkthroughs/adding_resource',
          // 'walkthroughs/bulkadd_resource',
          'walkthroughs/placing_resource',
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

}
