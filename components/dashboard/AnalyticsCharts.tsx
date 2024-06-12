import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import data from '@/app/data/analytics';

const AnalyticsCharts: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Analytics for This Year
                </CardTitle>
                <CardDescription>Views Per Month</CardDescription>
            </CardHeader>
            <CardContent>
                <div style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}

export default AnalyticsCharts;

