import { Box } from "@chakra-ui/react"
import { wrapperPadding } from "../lib/theme"
export default function WrapperBox(props) {
  return (
    <Box {...props} p={wrapperPadding}>
    </Box>
  )
}
