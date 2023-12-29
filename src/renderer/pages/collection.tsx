import { CollectionAside } from 'renderer/components/collection-aside';
import { CollectionFooter } from 'renderer/components/collection-footer';
import { CollectionHeader } from 'renderer/components/collection-header';
import { CollectionSidebar } from 'renderer/components/collection-sidebar';
import { RequestPanel } from 'renderer/components/request-panel';
import { ResponsePanel } from 'renderer/components/response-panel';
import { Tabs } from 'renderer/components/tabs';

export function Collection() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <CollectionHeader.Root />
      <div className="flex flex-row flex-1">
        <CollectionAside.Root />
        <CollectionSidebar.Root>
          <CollectionSidebar.Header.Root />
          <CollectionSidebar.Nav.Root />
        </CollectionSidebar.Root>
        <RequestPanel.Root>
          <RequestPanel.Header />
          <Tabs.Root>
            <Tabs.TabList.Root>
              <Tabs.TabList.Tab>Body</Tabs.TabList.Tab>
              <Tabs.TabList.Tab>Auth</Tabs.TabList.Tab>
              <Tabs.TabList.Tab>Params</Tabs.TabList.Tab>
              <Tabs.TabList.Tab>Query</Tabs.TabList.Tab>
              <Tabs.TabList.Tab>Headers</Tabs.TabList.Tab>
            </Tabs.TabList.Root>
            <Tabs.TabPanels.Root>
              <Tabs.TabPanels.Panel>
                <div className="p-5 text-white">Body content</div>
              </Tabs.TabPanels.Panel>
              <Tabs.TabPanels.Panel>
                <div className="p-5 text-white">Auth content</div>
              </Tabs.TabPanels.Panel>
              <Tabs.TabPanels.Panel>
                <div className="p-5 text-white">Params content</div>
              </Tabs.TabPanels.Panel>
              <Tabs.TabPanels.Panel>
                <div className="p-5 text-white">Query content</div>
              </Tabs.TabPanels.Panel>
              <Tabs.TabPanels.Panel>
                <div className="p-5 text-white">Headers content</div>
              </Tabs.TabPanels.Panel>
            </Tabs.TabPanels.Root>
          </Tabs.Root>
        </RequestPanel.Root>
        <ResponsePanel.Root>
          <ResponsePanel.Header />
          <Tabs.Root>
            <Tabs.TabList.Root>
              <Tabs.TabList.Tab>Preview</Tabs.TabList.Tab>
              <Tabs.TabList.Tab>Headers</Tabs.TabList.Tab>
              <Tabs.TabList.Tab>Cookies</Tabs.TabList.Tab>
              <Tabs.TabList.Tab>Timeline</Tabs.TabList.Tab>
            </Tabs.TabList.Root>
            <Tabs.TabPanels.Root>
              <Tabs.TabPanels.Panel>
                <div className="p-5 text-white">Preview Content</div>
              </Tabs.TabPanels.Panel>
              <Tabs.TabPanels.Panel>
                <div className="p-5 text-white">Headers Content</div>
              </Tabs.TabPanels.Panel>
              <Tabs.TabPanels.Panel>
                <div className="p-5 text-white">Cookies Content</div>
              </Tabs.TabPanels.Panel>
              <Tabs.TabPanels.Panel>
                <div className="p-5 text-white">Timeline Content</div>
              </Tabs.TabPanels.Panel>
            </Tabs.TabPanels.Root>
          </Tabs.Root>
        </ResponsePanel.Root>
      </div>
      <CollectionFooter.Root />
    </div>
  );
}
