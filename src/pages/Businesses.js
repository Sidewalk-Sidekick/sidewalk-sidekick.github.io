import Footer from '../components/Footer';
import SecondaryHeader from '../components/SecondaryHeader';
import BasicTable from '../components/BasicTable';
import sData from '../short-north-businesses.json';
import { useMemo } from 'react';
import BusinessList from '../components/BusinessList';

const Businesses = () => {
  // const columns = [
  //   {
  //     header: 'Image',
  //     accessorKey: 'image_url',
  //   },
  //   {
  //     header: 'Name',
  //     accessorKey: 'name',
  //   },
  //   {
  //     header: 'Address',
  //     accessorKey: 'address',
  //   },
  //   {
  //     header: 'Wheelchair Accessible',
  //     accessorKey: 'tags',
  //   },
  //   {
  //     header: 'Date Contacted',
  //     accessorKey: 'date_contacted',
  //   },
  // ];
  // const data = useMemo(() => sData, []);

  return (
    <div className='page-container'>
      <SecondaryHeader />
      <BusinessList />
      {/* <BasicTable data={data} columns={columns} /> */}
      <Footer />
    </div>
  );
};

export default Businesses;
