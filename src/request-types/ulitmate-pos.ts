/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=ulitmate-pos
 */
export type UlitmatePosDefinitions = {
    /**
     * [Business Location 詳細資訊] - 會列出 Location 的詳細資訊
     */
    "get@info": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 商店名稱
                 */
                name: string;
                /**
                 * 電話
                 */
                mobile: string;
                /**
                 * 地址
                 */
                landmark: string;
                /**
                 * 國家
                 */
                country: string;
                /**
                 * 地區
                 */
                state: string;
                /**
                 * 城市
                 */
                city: string;
                /**
                 * 郵遞區號
                 */
                zip_code: string;
            };
        };
        contentType: null;
    };
    /**
     * [值班人員] - 取得值班店員與值班藥師資訊
     */
    "get@on-duty": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 店員 ID
                 */
                user_id: number;
                /**
                 * 店員姓名
                 */
                user_name: string;
                /**
                 * 藥劑師 ID
                 */
                pharmacist_id: number;
                /**
                 * 藥劑師姓名
                 */
                pharmacist_name: string;
            };
        };
        contentType: null;
    };
    /**
     * [交易清單] - 取得交易清單
     */
    "get@transactions": {
        body: null;
        query: {
            contactId ? : number;
        };
        response: {
            data: {
                /**
                 * 訂單編號
                 */
                id: number;
                /**
                 * 藥師姓名
                 */
                pharmacist_name: string;
                /**
                 * 症狀
                 */
                prescription_sign_message: string;
                /**
                 * 使用者名稱
                 */
                username: string;
                /**
                 * 病人姓名
                 */
                contact_name: string;
                /**
                 * 訂單產生日期
                 */
                created_at: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [建立一筆交易.] - no description
     */
    "post@transactions": {
        body: null;
        query: null;
        response: null;
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [單一交易] - 取得單一交易資訊
     * @param {integer} id - ID of transaction to return
     */
    "get@transactions/:id": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 訂單編號
                 */
                id: number;
                /**
                 * 訂單產生日期
                 */
                created_at: string;
                /**
                 * 病人 ID
                 */
                contact_id: number;
                /**
                 * 病人生日
                 */
                contact_dob: string;
                /**
                 * 病人姓名
                 */
                contact_name: string;
                /**
                 * 慣用語
                 */
                language: string;
                /**
                 * 總金額
                 */
                total_amount: string;
            };
        };
        contentType: null;
    };
    /**
     * [交易表裡的產品清單] - 取得交易表裡的產品清單
     * @param {integer} id - ID of transaction to return
     */
    "get@transactions/:id/products": {
        body: null;
        query: null;
        response: {
            data: {
                sell_id: number;
                quantity: number;
                price: string;
                usage_id: number;
                product_id: number;
                days: number;
                total: number;
                dosage: number;
                frequency: number;
                cautions: {} [];
                custom_caution: string;
                dosage_form: string;
                unit: string;
                usage: number;
            } [];
            links: {
                first: string;
                last: string;
                prev: string;
                next: string;
            };
            meta: {
                current_page: number;
                from: number;
                last_page: number;
                path: string;
                per_page: number;
                to: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [暫存交易] - no description
     */
    "post@transactions/suspend": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * success code
                 */
                success: number;
                /**
                 * response message
                 */
                msg: string;
                /**
                 * 暫存交易 id
                 */
                transaction_id: number;
            };
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [產品清單] - 取得產品清單
     */
    "get@products": {
        body: null;
        query: {
            keyword ? : string;
        };
        response: {
            data: {
                /**
                 * 藥品 id
                 */
                id: number;
                /**
                 * 藥品 SKU
                 */
                sku: string;
                /**
                 * 藥品名稱
                 */
                name: string;
                /**
                 * 庫存數量
                 */
                qty_available: number;
                /**
                 * 庫存警告數量
                 */
                alert_quantity: string;
                /**
                 * 售價
                 */
                default_sell_price: string;
                /**
                 * 藥品證號
                 */
                product_custom_field1: string;
                /**
                 * 藥品英文名稱
                 */
                product_custom_field2: string;
                /**
                 * 藥廠
                 */
                product_custom_field3: string;
                /**
                 * 藥品主成份
                 */
                product_custom_field4: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取得單一產品] - 取得單一產品詳細資訊
     * @param {integer} id - ID of product to return
     */
    "get@products/:id": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 藥品 id
                 */
                id: number;
                /**
                 * 藥品 SKU
                 */
                sku: string;
                /**
                 * 藥品名稱
                 */
                name: string;
                /**
                 * 單位 Key
                 */
                unit_key: string;
                /**
                 * 單位簡稱
                 */
                unit_short_name: string;
                /**
                 * 庫存數量
                 */
                qty_available: number;
                /**
                 * 庫存警告數量
                 */
                alert_quantity: string;
                /**
                 * 售價
                 */
                default_sell_price: string;
                /**
                 * 藥品證號
                 */
                product_custom_field1: string;
                /**
                 * 藥品英文名稱
                 */
                product_custom_field2: string;
                /**
                 * 藥廠
                 */
                product_custom_field3: string;
                /**
                 * 藥品主成份
                 */
                product_custom_field4: string;
            };
        };
        contentType: null;
    };
    /**
     * [客戶清單] - 取得客戶清單
     */
    "get@contacts": {
        body: null;
        query: {
            accountNo ? : string;
            neme ? : string;
            mobile ? : string;
            keyword ? : string;
            type ? : "patient" | "customer" | "p_and_c";
        };
        response: {
            data: {
                /**
                 * 顧客 id
                 */
                id: number;
                /**
                 * 顧客類型(病人 or 購買人)
                 */
                type: "patient" | "customer" | "p_and_c";
                /**
                 * 顧客名稱
                 */
                name: string;
                /**
                 * 手機號碼
                 */
                mobile: string;
                /**
                 * 身分證字號
                 */
                accountNo: string;
                /**
                 * 建立日期
                 */
                created_at: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [建立病人/購買人資訊] - 建立病人/購買人資訊
     */
    "post@contacts": {
        body: null;
        query: null;
        response: {
            /**
             * 顧客 id
             */
            contactId: number;
            /**
             * 是否成功
             */
            success: boolean;
        };
        contentType: "x-www-form-urlencoded";
    };
    /**
     * [取得單一客戶資訊] - 取得單一客戶詳細資訊
     * @param {integer} id - ID of contact to return
     */
    "get@contacts/:id": {
        body: null;
        query: null;
        response: {
            data: {
                /**
                 * 顧客 id
                 */
                id: number;
                /**
                 * 顧客類型(病人 or 購買人)
                 */
                type: "patient" | "customer" | "p_and_c";
                /**
                 * 身分證字號
                 */
                identity_id: string;
                /**
                 * 顧客名稱
                 */
                name: string;
                /**
                 * 性別
                 */
                gender: "F" | "M";
                /**
                 * 生日
                 */
                birthday: string;
                /**
                 * email
                 */
                email: string;
                /**
                 * 手機號碼
                 */
                mobile: string;
                /**
                 * 電話號碼
                 */
                phoneNumber: string;
                /**
                 * 地址
                 */
                address: string;
                /**
                 * 藥物忌諱
                 */
                drugTaBoo: string;
                allergyDrugs: {
                    /**
                     * 藥品ID
                     */
                    id: number;
                    /**
                     * 藥品備註
                     */
                    note: string;
                } [];
                allergyIngredients: {
                    /**
                     * 主成份 ID
                     */
                    id: number;
                    /**
                     * 主成份過敏備註
                     */
                    note: string;
                } [];
                /**
                 * 建立日期
                 */
                created_at: string;
            };
        };
        contentType: null;
    };
    /**
     * [更新病人/購買人資訊] - 更新病人/購買人資訊
     * @param {integer} id - ID of contact to return
     */
    "put@contacts/:id": {
        body: null;
        query: null;
        response: null;
        contentType: "x-www-form-urlencoded";
    };
}