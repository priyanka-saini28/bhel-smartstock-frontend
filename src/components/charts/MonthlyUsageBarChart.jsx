import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { month: 'Jan', usage: 600 },
  { month: 'Feb', usage: 480 },
  { month: 'Mar', usage: 690 },
  { month: 'Apr', usage: 810 },
  { month: 'May', usage: 610 },
  { month: 'Jun', usage: 540 },
  { month: 'Jul', usage: 910 },
  { month: 'Aug', usage: 720 },
  { month: 'Sep', usage: 620 },
  { month: 'Oct', usage: 840 },
  { month: 'Nov', usage: 590 },
  { month: 'Dec', usage: 690 }
]

const MonthlyUsageBarChart = () => {

  return (

    <div className="w-full h-[320px]">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="usage"
            fill="#0052cc"
            radius={[4, 4, 0, 0]}
            barSize={22}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  )
}

export default MonthlyUsageBarChart