import React from 'react';

const Table = () => {
  return (
    <div className="overflow-x-auto bg-[rgb(245,245,245)] p-4">
      <table className="max-w-7xl mx-auto border-collapse border border-gray-400">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2   border border-gray-400 text-left">Brand</th>
            <th className="px-4 py-2 border border-gray-400 text-left">Pasture Raised</th>
            <th className="px-4 py-2 border border-gray-400 text-left">Fed Organic</th>
            <th className="px-4 py-2 border border-gray-400 text-left">GMO Free</th>
            <th className="px-4 py-2 border border-gray-400 text-left">Soy Free</th>
            <th className="px-4 py-2 border border-gray-400 text-left">Corn Free</th>
            <th className="px-4 py-2 border border-gray-400 text-left">Low PUFA</th>
            <th className="px-4 py-2 border border-gray-400 text-left">Vaccine Free Poultry</th>
          </tr>
        </thead>
        <tbody className='text-black'>
          <tr>
            <td className="px-4 py-2 border border-gray-400">Primal Pastures</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-400">Butcher Box</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-400">Grocery Store Organic</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-400">White Oak Pastures</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-400">Force of Nature</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-400">Cooks Venture</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-400">Wild Pastures</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">Yes</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
            <td className="px-4 py-2 text-center text-black border border-gray-400">No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
