import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function DiaryWriter() {
  return (
    <Stack direction="row" h="100vh" w="100vw">
      <Box p={8} maxW="lg">
        <Text as="h1" fontSize="4xl" fontWeight="bold">
          Let&#39;s look back on the path we took today...
        </Text>
        <FormControl>
          <FormLabel>Weather</FormLabel>
          <Stack direction="row" alignItems="center">
            <Select>
              <option value="sun">sunny</option>
              <option value="cloud">cloudy</option>
              <option value="wind">windy</option>
              <option value="rain">rainy</option>
              <option value="storm">storm</option>
              <option value="snow">snowy</option>
            </Select>
            <ArrowForwardIcon />
            <Select>
              <option value="sun">sunny</option>
              <option value="cloud">cloudy</option>
              <option value="wind">windy</option>
              <option value="rain">rainy</option>
              <option value="storm">storm</option>
              <option value="snow">snowy</option>
            </Select>
          </Stack>
          <Checkbox>changed</Checkbox>
        </FormControl>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <Textarea />
        </FormControl>
      </Box>
      <Box>Setting</Box>
    </Stack>
  );
}
