<div align="right">
Made with love from <img src='https://i.postimg.cc/Mc25FLHJ/Flag-of-Ecuador.png' width='10'/> 
</div>

# **Http library**

Make http request easily ⬆⬇

## Content table

1. Installation
2. Author

## 1. Installation

1. Download [git](https://git-scm.com/downloads) <img src='https://i.postimg.cc/4nGTxK8y/Git-Icon-1788-C.png' width="10"/> if you don't have it
2. Secondly, in your prefered console <img src='https://i.postimg.cc/GmBZnx3K/7560719.png' width="12" alt="Terminal freepik by Royyan Wijaya"/> execute:

   ```powershell
   git clone https://github.com/jeffersonmejia/http-lib.git
   ```

3. In root folder move "http.js" or "http.ts" to your project folder

4. Update your JS script to type module

   ```html
   <script src="my-script.js" type="module"></script>
   ```

5. Import "http-lib" from http.js pathname

   ```javascript
   import http from './pathname'
   ```

6. If you're using TypeScript add this to your tsconfig.json

```json
		"allowJs": true ,
```

7. Use examples with

   ```javascript
   import http from './lib/http-lib.js'

   async function getPosts() {
   	try {
   		// By default will use {url:'', methot:'GET'}, you can change it when you need it
   		const response = await http({ url: 'https://example.com/posts' })
   		console.log(response)
   	} catch (error) {
   		console.log(error)
   	}
   }

   document.addEventListener('DOMContentLoaded', async (e) => {
   	await getPosts()
   })
   ```

## 2. Author

[Jefferson Mejía](https://jeffersonmejia.github.io/blog) - Eng. Systems, Web developer
