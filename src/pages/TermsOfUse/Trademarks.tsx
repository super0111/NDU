import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Trademarks = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        6. TRADEMARKS
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        All logos and any other product or service name or slogan contained on
        the Site are trademarks of NDU or its manufacturers, distributors,
        advertisers, suppliers, customers, clients, vendors or licensors, and
        may not be copied, imitated or used, in whole or in part, without the
        express prior written permission of NDU or the applicable trademark
        holder. In addition, the look and feel of the Site, including all page
        headers, custom graphics, button icons and scripts, are the service
        marks, trademarks and/or trade dress of NDU and may not be copied,
        imitated or used, in whole or in part, without our express prior written
        permission. All other trademarks, service marks, logos, and product
        names published on the Site are the property of their respective owners.
        Reference to any products, services, processes or other information, by
        trade name, trademark, manufacturer, distributor, service provider,
        supplier or otherwise does not constitute or imply endorsement,
        sponsorship or recommendation thereof by NDU.
      </Typography>
    </Box>
  )
}
