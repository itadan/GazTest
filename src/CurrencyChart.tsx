import React, { useState } from 'react';
import { ReactECharts } from './Echarts/ReactECharts';
import { mockData } from './data/data';
import './CurrencyChart.css';

const currencyOptions = [
    { label: 'КУРС ДОЛЛАРА, $/₽', value: 'Курс доллара', symbol: '$' },
    { label: 'КУРС ЕВРО, €/₽', value: 'Курс евро', symbol: '€' },
    { label: 'КУРС ЮАНЯ, ¥/₽', value: 'Курс юаня', symbol: '¥' },
];

export const CurrencyChart = () => {
    const [selectedCurrency, setSelectedCurrency] = useState<any>(currencyOptions[0].value);
    const currencyData = mockData.filter(data => data.indicator === selectedCurrency);

    const averageValue = currencyData.reduce((acc, curr) => acc + curr.value, 0) / currencyData.length;

    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: function(params: any[]) { // Явно указываем тип параметра params как массив any
                let tooltipText = params[0].axisValue + '<br/>'; // Осевое значение (дата)
                tooltipText += `<span style="color:#F38B00">&#9679;</span> Курс: ${params[0].data} ₽`; // Курс
                return tooltipText;
            }
        },
        xAxis: {
            type: 'category',
            data: currencyData.map(data => data.month),
        },
        yAxis: {
            type: 'value',
            min: selectedCurrency === 'Курс доллара' ? 70 : selectedCurrency === 'Курс евро' ? 80 : selectedCurrency === 'Курс юаня' ? 20 : 0,      
        },
        series: [
            {
                data: currencyData.map(data => data.value),
                type: 'line',
                lineStyle: {
                    width: 2, 
                    color:'#F38B00',
                },
                itemStyle: {
                    opacity: 0, 
                },
                
            },
        ],
    };

    const handleChangeCurrency = (currency: string) => {
        setSelectedCurrency(currency);
    };

    return (
        <div className="currency-chart">
            <h1 className="currency-text">{currencyOptions.find(currency => currency.value === selectedCurrency)?.label}</h1>
            <div className='currency-buttons-container'>
            <div className="currency-buttons">
                {currencyOptions.map((currency) => (
                    <button
                        key={currency.value}
                        onClick={() => handleChangeCurrency(currency.value)}
                        style={{ padding: '2px 5px'}}
                    >
                        {currency.symbol}
                    </button>
                ))}
            </div>
            </div>
            <div className='blockM'>
            <div className='ECharts'>
            <ReactECharts option={option} />
            </div>
            <div className='average' style={{fontFamily:'Inter, sans-serif',fontSize:'16px'}}>Среднее за период <br/><span style={{ color: '#F38B00', fontSize:'48px' }}>{averageValue.toFixed(2)} ₽</span></div>
            </div>
        </div>
    );
    
};
