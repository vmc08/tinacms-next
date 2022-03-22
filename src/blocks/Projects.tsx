import { Box, Stack, Icon, useBreakpointValue } from '@chakra-ui/react'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

import Image from '@components/Image'
import Button from '@components/Button'
import ResponsiveContainer from '@components/ResponsiveContainer'
import { PagesBlocksProjects } from '../../.tina/__generated__/types'

const Projects: React.FC<PagesBlocksProjects> = ({ projectItem }) => {
  const imageHeight = useBreakpointValue({ xs: 125, lg: 250 }) || 0
  return (
    <ResponsiveContainer py={{ xs: 16, lg: 32 }}>
      <Stack spacing={5} direction={{ xs: 'column', lg: 'row' }} alignItems="center" justifyContent="space-around">
        {(projectItem || []).map((p, idx) => (
          <Box key={idx}>
            <Box mb={{ xs: 2, lg: 4 }}>
              {p?.image && <Image height={imageHeight} width={imageHeight} src={p.image} alt="Project Image" />}
            </Box>
            <Button variant="link" rightIcon={<Icon as={ArrowNarrowRightIcon} />}>
              Project {idx + 1}
            </Button>
          </Box>
        ))}
      </Stack>
    </ResponsiveContainer>
  )
}

export default Projects
