import {
  Button,
  Checkbox,
  SimpleGrid,
  Popover,
} from '@mantine/core';

export const MapControls = ({
  showCamps,
  setShowCamps,
  showTracks,
  setShowTracks,
}) => {
  return (
    <Popover
      width={200}
      position='right'
      withArrow
      shadow='md'
      trapFocus
    >
      <Popover.Target>
        <Button>Map Controls</Button>
      </Popover.Target>
      <Popover.Dropdown style={{ zIndex: 401 }}>
        <SimpleGrid
          spacing='lg'
        >
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
        </SimpleGrid>
      </Popover.Dropdown>
    </Popover>
  );
};
