import Trans from 'next-translate/Trans'

import AlertMessage from '@/components/alert-message/alert-message'
import ExternalLink from '@/components/external-link'
import MyProfileEmail from '@/components/profile/my-profile-email'
import MyProfilePassword from '@/components/profile/my-profile-password'
import { useAuth } from '@/contexts/auth-context'

export default function MyProfileSecurityTemplate() {
  const { method } = useAuth()
  if (method === 'google') {
    return (
      <AlertMessage
        content={
          <Trans
            components={[
              <p key={0} />,
              <ExternalLink
                className="underline"
                key={1}
                href="https://myaccount.google.com/"
                target="_blank"
              />,
            ]}
            i18nKey="profile:googleSecurity"
          />
        }
        variant="green"
      />
    )
  }

  return (
    <>
      <MyProfileEmail />
      <MyProfilePassword />
    </>
  )
}
