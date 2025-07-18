import {
  Button,
  Center,
  Checkbox,
  SimpleGrid,
  Popover,
} from '@mantine/core';

const togglerStyles = { zIndex: 401, position: 'absolute', left: '10px', top: '90px' };
const popoverStyles = { zIndex: 402 };

export const MapControls = ({
  showCamps,
  setShowCamps,
  showTracks,
  setShowTracks,
  showYosemite,
  setShowYosemite,
}) => {
  return (
    <Popover
      width={200}
      position='left'
      withArrow
      shadow='md'
      trapFocus
    >
      <Popover.Target>
        <Button style={togglerStyles}>Map Controls</Button>
      </Popover.Target>
      <Popover.Dropdown style={popoverStyles}>
        <SimpleGrid
          spacing='lg'
        >
          <Center>Map Elements</Center>
          <Checkbox
            checked={showCamps}
            label='Show Campsites'
            onChange={() => setShowCamps(_curr => !_curr)}
          />
          <Checkbox
            checked={showTracks}
            label='Show Route'
            onChange={() => setShowTracks(_curr => !_curr)}
          />
          <Center>Boundaries</Center>
          <Checkbox
            checked={showYosemite}
            label='Yosemite'
            onChange={() => setShowYosemite(_curr => !_curr)}
          />
        </SimpleGrid>
      </Popover.Dropdown>
    </Popover>
  );
};
