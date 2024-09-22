import { useState } from 'react';
import './App.css'
import {Button, Checkbox, Dropdown, Flex, Input, RadioGroup, Select, Switch, useThemeContext} from "../../src/index";

const mockData = [
  {
    label: "Item Number One",
    value: "1"
  },
  {
    label: "Item Number Two",
    value: "2"
  },
  {
    label: "Item Number Three",
    value: "3"
  },
  {
    label: "Item Number Four",
    value: "4"
  },
  {
    label: "Item 5",
    value: "5"
  }
];

const mockRadioData = [
  {
    value: "1",
    label: "option1"
  },
  {
    value: "2",
    label: "option2"
  },
  {
    value: "3",
    label: "option3"
  },
  {
    value: "4",
    label: "option4"
  }
]

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const {lightBackgroundColor, lightTextColor, darkBackgroundColor, darkTextColor} = useThemeContext();

  return (
    <div className='container'
      style={{
        backgroundColor: darkMode?darkBackgroundColor:lightBackgroundColor,
        color: darkMode?darkTextColor:lightTextColor
      }}
    >
      <Flex direction='column' gap='1rem'>
        <div>DEMO</div>
        <Switch checked={darkMode} onChange={(v) => setDarkMode(v)} shape={'pill'}/>
      </Flex>
      <Flex direction="column" gap="1rem">
        <Button variant={'minimal'} darkMode={darkMode}>Button</Button>
        <Button variant={'outline'} darkMode={darkMode}>Button</Button>
        <Button variant={'fill'} darkMode={darkMode}>Button</Button>
        <Button disabled darkMode={darkMode}>Button</Button>
        <Button rounded='none' darkMode={darkMode}>Button</Button>
        <Button rounded='sm' darkMode={darkMode}>Button</Button>
        <Button rounded='md' darkMode={darkMode}>Button</Button>
        <Button rounded='lg' darkMode={darkMode}>Button</Button>
        <Button rounded='pill' darkMode={darkMode}>Button</Button>
        <Button rounded='circle' darkMode={darkMode}>Button</Button>
      </Flex>
      <Flex direction='column' gap='1rem'>
        <Dropdown variant={'minimal'} darkMode={darkMode}>
          <Dropdown.Button>Dropdown</Dropdown.Button>
          <Dropdown.Items>
            {mockData.map(data => <Dropdown.Item key={`dropdown_1_${data.label}`} onClick={()=>{}}>{data.label}</Dropdown.Item>)}
          </Dropdown.Items>
        </Dropdown>
        <Dropdown variant={'outline'} darkMode={darkMode}>
          <Dropdown.Button>Dropdown</Dropdown.Button>
          <Dropdown.Items>
            {mockData.map(data => <Dropdown.Item key={`dropdown_1_${data.label}`} onClick={()=>{}}>{data.label}</Dropdown.Item>)}
          </Dropdown.Items>
        </Dropdown>
        <Dropdown variant={'fill'} darkMode={darkMode}>
          <Dropdown.Button>Dropdown</Dropdown.Button>
          <Dropdown.Items>
            {mockData.map(data => <Dropdown.Item key={`dropdown_1_${data.label}`} onClick={()=>{}}>{data.label}</Dropdown.Item>)}
          </Dropdown.Items>
        </Dropdown>
        <Dropdown variant={'outline'} darkMode={darkMode} disabled>
          <Dropdown.Button>Dropdown</Dropdown.Button>
          <Dropdown.Items>
            {mockData.map(data => <Dropdown.Item key={`dropdown_1_${data.label}`} onClick={()=>{}}>{data.label}</Dropdown.Item>)}
          </Dropdown.Items>
        </Dropdown>
        <Dropdown variant={'minimal'} floatPlacement={'center'} darkMode={darkMode}>
          <Dropdown.Button>Dropdown</Dropdown.Button>
          <Dropdown.Items>
            {mockData.map(data => <Dropdown.Item key={`dropdown_1_${data.label}`} onClick={()=>{}}>{data.label}</Dropdown.Item>)}
          </Dropdown.Items>
        </Dropdown>
        <Dropdown variant={'minimal'} floatPlacement={'right'} darkMode={darkMode}>
          <Dropdown.Button>Dropdown</Dropdown.Button>
          <Dropdown.Items>
            {mockData.map(data => <Dropdown.Item key={`dropdown_1_${data.label}`} onClick={()=>{}}>{data.label}</Dropdown.Item>)}
          </Dropdown.Items>
        </Dropdown>
        <Checkbox/>
        <Checkbox disabled/>
        <Checkbox label='Label'/>
        <Checkbox label='Label' disabled/>
        
        <Switch/>
        <Switch shape={'pill'}/>
        <Switch shape={'rectangle'}/>
        <Switch disabled/> 
        <Switch shape={'pill'} disabled/>
        <Switch shape={'rectangle'} disabled/>
      </Flex>
      <Flex direction='column' gap='1.5rem'>
        <Input placeholder='Enter Anything...' variant={'underline'} darkMode={darkMode}/>
        <Input placeholder='Enter Anything...' darkMode={darkMode}/>
        <Input placeholder='Search' icon={'search'} darkMode={darkMode}/>
        <Input placeholder='Enter Email' icon={'mail'} darkMode={darkMode}/>
        <Input floatingLabel='Text' variant={'underline'} darkMode={darkMode}/>
        <Input floatingLabel='Text' darkMode={darkMode}/>
        <Input floatingLabel='Number' type='number' darkMode={darkMode}/>
        <Input floatingLabel='Password' type='password' darkMode={darkMode}/>
      </Flex>
      <Flex direction='column' gap='1.5rem'>
        <Select options={mockData} width={350} darkMode={darkMode}/>
        <Select placeholder='Choose Multiple...' options={mockData} width={350} multiple darkMode={darkMode}/>
        <Select placeholder="Search..." options={mockData} width={350} searchable darkMode={darkMode}/>
        <RadioGroup orientation={'horizontal'} name={'test1'} options={mockRadioData}/>
        <RadioGroup orientation={'horizontal'} name={'test1-2'} variant={'square'} options={mockRadioData}/>
        <RadioGroup orientation={'horizontal'} name={'test1-3'} variant={'hollow-circle'} options={mockRadioData}/>
        <RadioGroup orientation={'horizontal'} disabled name={'test2'} options={mockRadioData}/>
        <Flex gap='1.5rem'>
        <RadioGroup orientation={'vertical'} name={'test3'} options={mockRadioData}/>
        <RadioGroup orientation={'vertical'} name={'test4'} options={mockRadioData} disabled/>
        </Flex>
        
      </Flex>
    </div>
  )
}

export default App
