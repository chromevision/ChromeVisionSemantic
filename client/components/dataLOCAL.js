// 20190201152320
// http://localhost:8080/api/emotions

let data = [
	{
		id: 1,
		url: 'google.com',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0.12',
		happiness: '0.8',
		neutral: '0.002',
		sadness: '0.01',
		surprise: '0.068',
		createdAt: '2019-02-01T16:33:49.550Z',
		updatedAt: '2019-02-01T16:33:49.550Z',
		userId: 1
	},
	{
		id: 2,
		url: 'google.com',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0.12',
		happiness: '0.8',
		neutral: '0.002',
		sadness: '0.01',
		surprise: '0.068',
		createdAt: '2019-02-01T16:33:49.550Z',
		updatedAt: '2019-02-01T16:33:49.550Z',
		userId: 2
	},
	{
		id: 3,
		url: 'google.com',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0.12',
		happiness: '0.8',
		neutral: '0.002',
		sadness: '0.01',
		surprise: '0.068',
		createdAt: '2019-02-01T16:33:49.550Z',
		updatedAt: '2019-02-01T16:33:49.550Z',
		userId: 3
	},
	{
		id: 4,
		url: 'google.com',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0.12',
		happiness: '0.8',
		neutral: '0.002',
		sadness: '0.01',
		surprise: '0.068',
		createdAt: '2019-02-01T16:33:49.550Z',
		updatedAt: '2019-02-01T16:33:49.550Z',
		userId: 4
	},
	{
		id: 5,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0',
		happiness: '0',
		neutral: '0.946',
		sadness: '0.053',
		surprise: '0',
		createdAt: '2019-02-01T17:47:49.347Z',
		updatedAt: '2019-02-01T17:47:49.347Z',
		userId: 5
	},
	{
		id: 6,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0.001',
		disgust: '0',
		fear: '0',
		happiness: '0.001',
		neutral: '0.874',
		sadness: '0.124',
		surprise: '0',
		createdAt: '2019-02-01T17:47:53.529Z',
		updatedAt: '2019-02-01T17:47:53.529Z',
		userId: 5
	},
	{
		id: 7,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0.003',
		disgust: '0',
		fear: '0',
		happiness: '0',
		neutral: '0.23',
		sadness: '0.766',
		surprise: '0',
		createdAt: '2019-02-01T17:47:58.555Z',
		updatedAt: '2019-02-01T17:47:58.555Z',
		userId: 5
	},
	{
		id: 8,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0.001',
		disgust: '0',
		fear: '0',
		happiness: '0.002',
		neutral: '0.869',
		sadness: '0.128',
		surprise: '0',
		createdAt: '2019-02-01T17:48:03.538Z',
		updatedAt: '2019-02-01T17:48:03.538Z',
		userId: 5
	},
	{
		id: 9,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0.003',
		disgust: '0',
		fear: '0',
		happiness: '0',
		neutral: '0.171',
		sadness: '0.825',
		surprise: '0',
		createdAt: '2019-02-01T17:48:08.597Z',
		updatedAt: '2019-02-01T17:48:08.597Z',
		userId: 5
	},
	{
		id: 10,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0',
		happiness: '1',
		neutral: '0',
		sadness: '0',
		surprise: '0',
		createdAt: '2019-02-01T17:48:13.523Z',
		updatedAt: '2019-02-01T17:48:13.523Z',
		userId: 5
	},
	{
		id: 11,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0',
		happiness: '1',
		neutral: '0',
		sadness: '0',
		surprise: '0',
		createdAt: '2019-02-01T17:48:18.689Z',
		updatedAt: '2019-02-01T17:48:18.689Z',
		userId: 5
	},
	{
		id: 12,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0',
		happiness: '0.997',
		neutral: '0.003',
		sadness: '0',
		surprise: '0',
		createdAt: '2019-02-01T17:48:23.628Z',
		updatedAt: '2019-02-01T17:48:23.628Z',
		userId: 5
	},
	{
		id: 13,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0',
		happiness: '0.001',
		neutral: '0.98',
		sadness: '0.019',
		surprise: '0',
		createdAt: '2019-02-01T17:48:28.581Z',
		updatedAt: '2019-02-01T17:48:28.581Z',
		userId: 5
	},
	{
		id: 14,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0',
		happiness: '0',
		neutral: '0.299',
		sadness: '0.701',
		surprise: '0',
		createdAt: '2019-02-01T17:48:44.155Z',
		updatedAt: '2019-02-01T17:48:44.155Z',
		userId: 5
	},
	{
		id: 15,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0',
		happiness: '0.997',
		neutral: '0.003',
		sadness: '0',
		surprise: '0',
		createdAt: '2019-02-01T17:48:48.558Z',
		updatedAt: '2019-02-01T17:48:48.558Z',
		userId: 5
	},
	{
		id: 16,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0.001',
		disgust: '0',
		fear: '0',
		happiness: '0',
		neutral: '0.692',
		sadness: '0.306',
		surprise: '0',
		createdAt: '2019-02-01T17:48:53.548Z',
		updatedAt: '2019-02-01T17:48:53.548Z',
		userId: 5
	},
	{
		id: 17,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0.001',
		contempt: '0.002',
		disgust: '0',
		fear: '0',
		happiness: '0.012',
		neutral: '0.977',
		sadness: '0.008',
		surprise: '0',
		createdAt: '2019-02-01T17:48:58.527Z',
		updatedAt: '2019-02-01T17:48:58.527Z',
		userId: 5
	},
	{
		id: 18,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0',
		happiness: '0',
		neutral: '0.969',
		sadness: '0.031',
		surprise: '0',
		createdAt: '2019-02-01T17:49:18.540Z',
		updatedAt: '2019-02-01T17:49:18.540Z',
		userId: 5
	},
	{
		id: 19,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0.001',
		contempt: '0.002',
		disgust: '0',
		fear: '0',
		happiness: '0.122',
		neutral: '0.868',
		sadness: '0.007',
		surprise: '0',
		createdAt: '2019-02-01T17:49:23.532Z',
		updatedAt: '2019-02-01T17:49:23.532Z',
		userId: 5
	},
	{
		id: 20,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0',
		happiness: '0.877',
		neutral: '0.122',
		sadness: '0',
		surprise: '0',
		createdAt: '2019-02-01T17:49:33.546Z',
		updatedAt: '2019-02-01T17:49:33.546Z',
		userId: 5
	},
	{
		id: 21,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0.003',
		contempt: '0.001',
		disgust: '0',
		fear: '0',
		happiness: '0',
		neutral: '0.929',
		sadness: '0.066',
		surprise: '0',
		createdAt: '2019-02-01T17:53:51.292Z',
		updatedAt: '2019-02-01T17:53:51.292Z',
		userId: 5
	},
	{
		id: 22,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0.002',
		contempt: '0.001',
		disgust: '0',
		fear: '0',
		happiness: '0.001',
		neutral: '0.966',
		sadness: '0.03',
		surprise: '0',
		createdAt: '2019-02-01T17:53:56.682Z',
		updatedAt: '2019-02-01T17:53:56.682Z',
		userId: 5
	},
	{
		id: 23,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0.002',
		contempt: '0.039',
		disgust: '0.001',
		fear: '0',
		happiness: '0.001',
		neutral: '0.894',
		sadness: '0.063',
		surprise: '0',
		createdAt: '2019-02-01T17:54:01.003Z',
		updatedAt: '2019-02-01T17:54:01.003Z',
		userId: 5
	},
	{
		id: 24,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0.062',
		disgust: '0',
		fear: '0',
		happiness: '0.085',
		neutral: '0.846',
		sadness: '0.006',
		surprise: '0',
		createdAt: '2019-02-01T17:54:05.949Z',
		updatedAt: '2019-02-01T17:54:05.949Z',
		userId: 5
	},
	{
		id: 25,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0.001',
		contempt: '0.011',
		disgust: '0',
		fear: '0',
		happiness: '0',
		neutral: '0.944',
		sadness: '0.044',
		surprise: '0',
		createdAt: '2019-02-01T17:54:10.981Z',
		updatedAt: '2019-02-01T17:54:10.981Z',
		userId: 5
	},
	{
		id: 26,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0.001',
		disgust: '0',
		fear: '0',
		happiness: '0.001',
		neutral: '0.938',
		sadness: '0.06',
		surprise: '0',
		createdAt: '2019-02-01T17:54:15.968Z',
		updatedAt: '2019-02-01T17:54:15.968Z',
		userId: 5
	},
	{
		id: 27,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0.001',
		contempt: '0.001',
		disgust: '0',
		fear: '0',
		happiness: '0.003',
		neutral: '0.99',
		sadness: '0.005',
		surprise: '0',
		createdAt: '2019-02-01T17:54:20.961Z',
		updatedAt: '2019-02-01T17:54:20.961Z',
		userId: 5
	},
	{
		id: 28,
		url: 'chrome-extension://elblccdgbaabbjdcgjcepdlcpeppmnhd/options.html',
		anger: '0',
		contempt: '0',
		disgust: '0',
		fear: '0',
		happiness: '0.001',
		neutral: '0.969',
		sadness: '0.03',
		surprise: '0',
		createdAt: '2019-02-01T17:54:25.975Z',
		updatedAt: '2019-02-01T17:54:25.975Z',
		userId: 5
	}
];

let answer = data.map;
