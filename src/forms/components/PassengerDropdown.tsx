import { ReactNode, useState } from "react";
import { ActionIcon, Menu } from '@mantine/core';
import { IconMinus, IconPlus } from '@tabler/icons'

export default function PassengerDropdown({ buttonComponent, items }: { buttonComponent: ReactNode, items: Array<{ label: string, caption: string }> }) {

  const [itemCount, setItemCount] = useState(Array(items.length).fill(0))

  console.log(items.length);
  

  function handleMinus(i: number) {
    const copy = [...itemCount]
    copy[i] = copy[i]-1
    setItemCount(copy)
  }

  function handlePlus(i: number) {
    const copy = [...itemCount]
    copy[i] = copy[i]+1
    setItemCount(copy)
  }

  return (
    <Menu width={400} shadow="md" radius="lg">
      <Menu.Target>
        {buttonComponent}
      </Menu.Target>
      <Menu.Dropdown py="md" px="md" >
        {items.map((item, i) => (
          <Menu.Item closeMenuOnClick={false}  className="rounded-none border-b my-1 py-4 border-solid border-gray-200 last:border-0">
            <div className='flex justify-between'>
              <div className="">
                <p className='text-gray-600 !font-medium'>{item.label}</p>
                <p className='text-gray-400 text-xs'>{item.caption}</p>
              </div>

              <span className="flex items-center gap-x-3">

                <ActionIcon disabled={itemCount[i] === 0} size="lg" radius="xl" variant="outline" onClick={() => handleMinus(i)}>
                  <IconMinus size={26} />
                </ActionIcon>
                <p className='font-medium text-gray-500'>{itemCount[i]}</p>
                <ActionIcon size="lg" radius="xl" variant="outline" onClick={() => handlePlus(i)}>
                  <IconPlus size={26} />
                </ActionIcon>

              </span>

            </div>

          </Menu.Item>
        ))}


      </Menu.Dropdown>
    </Menu>
  )
}
