export const PAGES_NAV = [
  {
    path: 'pages',
    children: [
      {
        path: 'auth',
        data: {
          nav: {
            title: '권한관리'
          }
        },
        children: [
          {
            path: 'account',
            data: {
              nav: {
                title: '계정관리'
              }
            }
          },
          {
            path: 'group',
            data: {
              nav: {
                title: '권한그룹 관리'
              }
            }
          },
        ]
      },
      {
        path: 'fee',
        data: {
          nav: {
            title: '배송비관리'
          }
        },
        children: [
          {
            path: 'distribution',
            data: {
              nav: {
                title: '요금분배관리'
              }
            }
          },
          {
            path: 'distance',
            data: {
              nav: {
                title: '거리별 요금관리'
              }
            }
          },
          {
            path: 'extra',
            data: {
              nav: {
                title: '할증관리'
              }
            }
          },
        ]
      },
      {
        path: 'business',
        data: {
          nav: {
            title: '업체관리'
          }
        },
        children: [
          {
            path: 'partner',
            data: {
              nav: {
                title: '파트너 관리'
              }
            }
          },
          {
            path: 'agent',
            data: {
              nav: {
                title: '기사 관리'
              }
            }
          },
          {
            path: 'client',
            data: {
              nav: {
                title: '본사 관리'
              }
            }
          },
          {
            path: 'store',
            data: {
              nav: {
                title: '상점 관리'
              }
            }
          },
        ]
      },
      {
        path: 'monitoring',
        data: {
          nav: {
            title: '관제관리'
          }
        },
        children: [
          {
            path: 'live',
            data: {
              nav: {
                title: '관제현황'
              }
            }
          },
          {
            path: 'claim',
            data: {
              nav: {
                title: '상담이력 관리'
              }
            }
          },
          {
            path: 'autocall',
            data: {
              nav: {
                title: '오토콜 관리'
              }
            }
          },
          {
            path: 'sms',
            data: {
              nav: {
                title: '문자 관리'
              }
            }
          },
        ]
      },
      {
        path: 'bootake',
        data: {
          nav: {
            title: '부탁해!'
          }
        },
        children: [
          {
            path: '',
            data: {
              nav: {
                title: '부탁해! Live',
                url: 'http://live.bootake.com',
                target: '_blank'
              }
            }
          },
          {
            path: '',
            data: {
              nav: {
                title: '부탁해! 멤버',
                url: 'http://bootake.com/member',
                target: '_blank'
              }
            }
          },
          {
            path: '',
            data: {
              nav: {
                title: '부탁해! Seller',
                url: 'http://bootake.com/seller',
                target: '_blank'
              }
            }
          },
          {
            path: '',
            data: {
              nav: {
                title: '부탁해! Admin',
                url: 'http://bootake.com/admin',
                target: '_blank'
              }
            }
          },
        ]
      }
    ]
  }
];