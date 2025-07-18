import { Checkbox, SimpleGrid } from '@mantine/core';

export const MapControls = ({
  showCamps,
  setShowCamps,
  showTracks,
  setShowTracks,
}) => {
  return (
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
  );
};
