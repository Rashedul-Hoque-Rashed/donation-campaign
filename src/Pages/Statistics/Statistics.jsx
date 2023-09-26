import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";


const Statistics = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
      const yourDonation = JSON.parse(localStorage.getItem('donate'));

      if(yourDonation){
        const pieData = [
              {
                  "name": "Total Donation",
                  "value": (12 - yourDonation.length)
              },
              {
                  "name": "Your Donation",
                  "value": yourDonation.length
              }
          ];
          setData(pieData);
      }
      else{
        const pieData = [
          {
              "name": "Total Donation",
              "value": 12
          },
          {
              "name": "Your Donation",
              "value": 0
          }
      ];
      setData(pieData);
      }
    },[]);


    const COLORS = ['#FF444A', '#00C49F'];



    return (

        <div className="flex h-96 font-bold justify-center items-center mt-16">
            <PieChart width={350} height={350}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
              
                        return (
                          <text
                            x={x}
                            y={y}
                            fill="#FFFFFF"
                            textAnchor={x > cx ? 'start' : 'end'}
                            dominantBaseline="central"
                            className="font-bold"
                          >
                            {`${(percent * 100).toFixed(2)}%`}
                          </text>
                        );
                      }}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
        </div>

    );
};

export default Statistics;