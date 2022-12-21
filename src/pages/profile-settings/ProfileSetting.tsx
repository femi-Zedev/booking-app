import Footer from '@/components/Footer'
import NavSection from '@/components/NavSection'
import SubscribeSection from '@/components/SubscribeSection'
import { Anchor, Breadcrumbs, Select, Tabs } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons'
import { useState } from 'react'
import PersonnalInfo from './settings-pages/PersonnalInfo'

export default function ProfileSetting() {
  const [activeTab, setActiveTab] = useState<string>('personal_info');


  const items = [
    { title: 'Profile', href: '/profile' },
    { title: 'Personal Information', href: 'javascript:void(0)' },

  ].map((item, index) => (
    <Anchor className="text-gray-700 last:text-gray-500" href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  const tabList = [
    { value: 'personal_info', label: 'Personal Info' },
    { value: 'security', label: 'Security' },
    { value: 'notifications', label: 'Notifications' },
    { value: 'payment_payout', label: 'Payment payout' },
    { value: 'privacy_sharing', label: 'Privacy and sharing' },
    { value: 'preference', label: 'Preference' },

  ]

  function getTabContent(tab: string) {
    switch (tab) {
      case 'personal_info':
        return (<PersonnalInfo />)

      case 'security':
        return <div>Security</div>

      case 'notifications':
        return <div>Notifications</div>


      case 'payment_payout':
        return <div>Payment payout</div>


      case 'privacy_sharing':
        return <div>Privacy & sharing</div>


      case 'preference':
        return <div>Preference</div>

      default:
        return (<PersonnalInfo />)
    }
  }

  return (
    <div className='bg-gray-50'>
      <NavSection withIconImage={false} />

      <section className='px-[5%] lg:px-[10%] mx-auto py-5'>
        <div className="hidden lg:block">
          <Breadcrumbs className="hidden lg:flex mx-auto py-5 text-sm font-medium" separator={<IconChevronRight className='stroke-[3px]' size={16} />}>{items}</Breadcrumbs>
        </div>


        <div className="mt-5">
          <Tabs className='hidden lg:block' value={activeTab} onTabChange={(tab: string) => { setActiveTab(tab); getTabContent(tab) }}
            styles={(theme) => ({
              tab: {
                padding: '16px 0',
                '&:hover': {
                  backgroundColor: 'unset',
                  color: '#fefefe'
                }
              },
            })
            }>
            <Tabs.List className='gap-x-10 w-fit'>
              {tabList.map((tab, i) => (
                <Tabs.Tab
                  key={i} value={tab.value}
                >
                  <p className={`text-base ${activeTab === tab.value ? 'text-gray-800 font-bold' : 'text-gray-500'}`}>{tab.label}</p>
                </Tabs.Tab>
              ))}
            </Tabs.List>

            <Tabs.Panel value={activeTab} pt="xs">
              <div className="mt-12">
                {getTabContent(activeTab)}
              </div>
            </Tabs.Panel>
          </Tabs>
          <div className="block lg:hidden">
            <Select size="md" radius="md"
              defaultValue={activeTab}
              aria-label='tabs'
              data={tabList}
              onChange={(tab: string) => { setActiveTab(tab); getTabContent(tab) }} />
            <div className="mt-12">
              {getTabContent(activeTab)}
            </div>
          </div>


        </div>
      </section>

      <SubscribeSection />
      <Footer />
    </div>
  )
}
