module.exports = {
  docs: [
      'overview',
      {
        Managing: [
          {
            Installation: [
              'managing/installation/packages',
              'managing/installation/source',
              'managing/installation/docker',
            ]
          },
          {
            Administration: [
              'managing/administration/backup',
              'managing/administration/security',
              'managing/administration/migrating',
              'managing/administration/upgrading',
              'managing/administration/troubleshooting',
            ]
          },
          {
            Developers: [
              'managing/developers/environment',
              'managing/developers/reporting',
              'managing/developers/apis',
              'managing/developers/contributing',
            ]
          },
        ]
      },
      {
        Admins: [
          'admins/branding',
          'admins/integrations',
          'admins/accounts',
          'admins/configurations',
        ]
      },
      {
        Customization: [
          'customizing/overview',
          {
            Records: [
              'customizing/records/index',
              'customizing/records/export',
              'customizing/records/features',
              'customizing/records/pages'
            ],
            Settings: [
              'customizing/settings/index',
              'customizing/settings/general',
              'customizing/settings/analytics',
              'customizing/settings/drive',
              'customizing/settings/email',
              'customizing/settings/facebook',
              'customizing/settings/google',
              'customizing/settings/integrations',
              'customizing/settings/subjects',
              'customizing/settings/theme',
              'customizing/settings/twitter',
            ]
          }
        ]
      },
      {
        Projects: [
          'projects/creating',
          {
            'Customizing Projects': [
              'projects/customizing/index',
              'projects/customizing/general',
              'projects/customizing/layout',
              'projects/customizing/access',
              'projects/customizing/people',
              'projects/customizing/texts',
              'projects/customizing/resources',
              'projects/customizing/collections',
              'projects/customizing/activity',
              'projects/customizing/metadata',
              'projects/customizing/social',
              'projects/customizing/exports',
              'projects/customizing/log',
            ]
          },
          'projects/collections',
          {
            'Preparing Texts': [
              'projects/preparing/index',
              'projects/preparing/epub',
              'projects/preparing/gdoc',
              'projects/preparing/md',
              'projects/preparing/docx',
            ]
          },
          'projects/resources',
          {
            'Accounts and Roles': [
              'projects/accounts/index',
              'projects/accounts/users',
              'projects/accounts/makers',
              'projects/accounts/creating',
              'projects/accounts/managing',
            ]
          },
        ]
      },
      {
        'Reading Interface': [
          'reading/index',
          'reading/library',
          'reading/projects',
          'reading/interface',
          'reading/sharing',
          'reading/placing',
          'reading/annotating',
          'reading/highlighting',
          'reading/notifications',
        ]
      },
      {
        Reference: [
          'reference/index',
          'reference/glossary',
          'reference/search',
          'reference/interface',
          'reference/metadata',
          'reference/downloads',
        ]
      }
  ],
  walkthroughs: [
    'walkthroughs/landing',
  ],
  guides: [
    'guides/landing',
    {
      Writing: [
        'guides/writing/index',
        'guides/writing/proposals',
        'guides/writing/rights',
        'guides/writing/writing',
      ]
    },
    {
      Publishing: [
        'guides/publishing/index',
        'guides/publishing/proposals',
        'guides/publishing/project_types',
        'guides/publishing/workflow',
      ]
    },
  ]

}
