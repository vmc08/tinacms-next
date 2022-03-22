import { isDev } from '@utils/envUtils'
import dynamic from 'next/dynamic'
import { TinaEditProvider } from 'tinacms/dist/edit-state'

const TinaProvider = dynamic(() => import('./TinaProvider'), { ssr: false })

const DynamicTina = ({ children }) => {
  return (
    <>
      <TinaEditProvider showEditButton={isDev} editMode={<TinaProvider>{children}</TinaProvider>}>
        {children}
      </TinaEditProvider>
    </>
  )
}

export default DynamicTina
