Ext.define('mobileV1.model.eAccountReader', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
		{ name: 'f_id', type: 'int' }, 
		{ name: 'f_doc_no', type: 'string' },
		{ name: 'f_eacc_bal', type: 'string' },
		{ name: 'f_trans_date', type: 'date'},
		{ name: 'f_credit',type: 'float'},
		{ name: 'f_debit',type: 'float'},
		{ name: 'trans_amount',type: 'float'}
	]}
});