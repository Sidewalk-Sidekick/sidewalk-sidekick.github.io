import Footer from '../components/Footer';
import SecondaryHeader from '../components/SecondaryHeader';
import BasicTable from '../components/BasicTable';
import sData from '../short-north-businesses.json';
import { useMemo } from 'react';
import BusinessList from '../components/BusinessList';
import SectionHeader from '../components/SectionHeader';
import SectionTextBox from '../components/SectionTextBox';
import SectionText from '../components/SectionText';
import BasicGrid from '../components/BasicGrid';

const Businesses = () => {
  const columns = [
    {
      header: 'Image',
      accessorKey: 'image_url',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
    {
      header: 'Accessible Types',
      accessorKey: 'accessible_types',
    },
    {
      header: 'Date Contacted',
      accessorKey: 'date_contacted',
    },
  ];
  const data = useMemo(() => sData, []);

  return (
    <div className='businesses-page page-container'>
      <SecondaryHeader />
      <SectionHeader className='container'>
        <h1>
          Wheelchair Accessibility in the Short North Arts District. The Good
          and The Bad.
        </h1>
      </SectionHeader>
      <BusinessList />
      {/* <BasicTable data={data} columns={columns} /> */}
      {/* <BasicGrid /> */}
      <Footer />
    </div>
  );
};

export default Businesses;
