import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { MyMap } from './components/MyMap';

function App() {
  return (
    <MantineProvider>
      <MyMap />
    </MantineProvider>
  )
}

export default App
