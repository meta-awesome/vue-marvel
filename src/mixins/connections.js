import md5 from 'js-md5'

export default {
	data() {
		return {
			PUBLIC_KEY: 'f6027913c493a49ad11556ef1d267404',
			PRIVATE_KEY: '3841c91a5971b4dd4134c8a578cdc2c2c65beebb',
		}
	},

	computed: {
		hash() {
			const timestamp = Number(new Date());
			const hash = md5.create();
	
			hash.update(timestamp + this.PRIVATE_KEY + this.PUBLIC_KEY);

			return `ts=${timestamp}&orderBy=title&apikey=${this.PUBLIC_KEY}&hash=${hash.hex()}`;
		},
	},
}