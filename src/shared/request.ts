export class Request
{
    constructor(public pk_req_id:number,
        public fk_email_id:string,public req_type:string,
        public req_desc:string,public req_date:string,
        public address:string,public req_qty:number,public req_qty_unit:string,public req_category:string){}
}
