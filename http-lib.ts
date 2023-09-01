const MAX_WAIT: number = 5000

interface httpRequest {
	url: string
	method: string
	body: object | any[] | null
}

export async function http({ url = '', method = 'GET', body = null }: httpRequest) {
	method = method.toUpperCase()

	let controller = new AbortController(),
		signal = controller.signal,
		options: any = { method, signal }

	if (method === 'POST' || method === 'PUT') {
		options.headers = { 'Content-Type': 'application/json' }
		options.body = JSON.stringify(body)
	}

	try {
		setTimeout(() => controller.abort(), MAX_WAIT)
		const response = await fetch(url, options)
		if (!response.ok) throw new Error('Rejected request')

		if (method === 'GET') {
			return { data: await response.json(), error: null }
		}
		return { data: null, error: null }
	} catch (error) {
		return { data: null, error: error.message }
	}
}
