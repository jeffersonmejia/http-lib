const MAX_WAIT = 5000,
	controller = new AbortController(),
	signal = controller.signal

export async function http() {
	const get = async (url) => {
		try {
			const options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				signal,
			}
			setTimeout(() => controller.abort(), MAX_WAIT)
			const response = await fetch(url, options)
			if (!response.ok) throw new Error('Rejected request')
			const json = await response.json()
			return { data: json }
		} catch (error) {
			return { error: error.message }
		}
	}

	return { get }
}
