import { Accordion } from '@ark-ui/solid/accordion'
import { Index } from 'solid-js'
import { icons } from './icons'

export const Collapsible = () => {
  return (
    <Accordion.Root class="accordion" defaultValue={['React']} collapsible>
      <Index each={['React', 'Solid', 'Vue']}>
        {(item) => (
          <Accordion.Item value={item()}>
            <div class="item-wrapper">
              <Accordion.ItemTrigger class="item-trigger">
                What is {item()}?
                <Accordion.ItemIndicator>
                  <icons.CaretDown class="arrow-icon" size={20} color="white" />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>

              <Accordion.ItemContent class="item-content">
                {item()} is a JavaScript library for building user interfaces.
              </Accordion.ItemContent>
            </div>
          </Accordion.Item>
        )}
      </Index>
    </Accordion.Root>
  )
}

export default Collapsible