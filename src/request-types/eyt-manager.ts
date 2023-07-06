/* eslint-disable */
/* tslint:disable */
/**
 * @see https://nextgen-travel.github.io/apis-doc/?target=eyt-manager
 */
export type EytManagerDefinitions = {
    /**
     * [取得個人資訊] - no description
     */
    "get@users/me": {
        body: null;
        query: null;
        response: {
            id: number;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            createdAt: string;
            updatedAt: string;
            memo: string;
            startedAt: string;
            finishedAt: string;
            account: string;
            store: {
                id: number;
                name: string;
                uuid: string;
                type: string;
                stockType: string;
                address: string;
                lat: number;
                lng: number;
                contactNumber: string;
                businessHours: string;
                isExcellent: boolean;
                isGenuine: boolean;
                website: string;
                collectCount: number;
                plan: {
                    email: string;
                    website: string;
                    whatsapp: string;
                    instagram: string;
                    messanger: string;
                    navigation: boolean;
                    contactNumber: string;
                    wechat: {
                        appId: string;
                        title: string;
                        qrcode: string;
                    };
                };
            };
        };
        contentType: null;
    };
    /**
     * [上傳檔案] - no description
     */
    "post@upload": {
        body: {
            files: File;
        };
        query: null;
        response: {
            id: number;
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number;
            height: number;
            formats: {
                large: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
                small: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
                medium: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
                thumbnail: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: string | null;
            createdAt: string;
            updatedAt: string;
        } [];
        contentType: "multipart/form-data";
    };
    /**
     * [獲取後台文章列表及審核文章列表] - no description
     */
    "get@admin/posts": {
        body: null;
        query: {
            reviewStatus ? : "pending" | "reviewed" | "reviewArchived";
            listStatus ? : "listArchived" | "review" | "draft" | "rejected";
            keyword ? : string;
            firstCategory ? : string;
            secondCategory ? : string;
            startTime ? : string;
            endTime ? : string;
            type ? : string;
            pageSize ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                uuid: string;
                title: string;
                type: {
                    id: number;
                    name: string;
                };
                categories: {
                    id: number;
                    name: string;
                } [];
                store: {
                    uuid: string;
                    name: string;
                };
                status: string;
                /**
                 * 編輯者
                 */
                editor: string;
                date: string;
                image: string;
                /**
                 * 文章退件原因
                 */
                reasonForReject: string;
            } [];
            pagination: {
                /**
                 * 當前頁面
                 */
                page: number;
                /**
                 * 每頁筆數
                 */
                pageSize: number;
                /**
                 * 總共頁數
                 */
                pageCount: number;
                /**
                 * 總共筆數
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [後台獲取指定文章] - no description
     * @param {string} uuid - 文章uuid
     */
    "get@admin/posts/:uuid": {
        body: null;
        query: null;
        response: {
            data: {
                contents: {
                    locale: string;
                    title: string;
                    uuid: string;
                    content: string;
                    seoDescription: string;
                    image: {
                        id: number;
                        url: string;
                    };
                } [];
                /**
                 * 立即 now, 預約reserve
                 */
                publishType: "now" | "reserve";
                publishStart: string;
                publishEnd: string;
                urlSuffix: string;
                store: number;
                editor: string;
                type: number;
                firstCategory: number;
                secondCategory: number;
                tags: number[];
                /**
                 * superAdmin的話不是pendingPublish就是draft,其他身份點擊儲存並審核則帶pendingReview,不然就是draft
                 */
                status: "pendingReview" | "draft";
            };
        };
        contentType: null;
    };
    /**
     * [確認特定屬性是否重複（當前僅用來確認urlSuffix)] - no description
     */
    "post@admin/checkDuplicates": {
        body: {
            /**
             * 後綴網址檢查
             */
            urlSuffix: string;
        };
        query: null;
        /**
         * true表示有重複，false則否
         */
        response: boolean;
        contentType: null;
    };
    /**
     * [獲取後台發布者id及name] - no description
     */
    "get@admin/posts/stores": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                name: string;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [後台建立文章] - no description
     */
    "post@admin/create/posts": {
        body: {
            contents: {
                locale: string;
                title: string;
                uuid: string;
                content: string;
                seoDescription: string;
                image: {
                    id: number;
                    url: string;
                };
            } [];
            urlSuffix: string;
            /**
             * 立即 now, 預約reserve
             */
            publishType: "now" | "reserve";
            publishStart: string;
            publishEnd ? : string;
            publisher ? : string;
            type: number;
            firstCategory: number;
            secondCategory ? : number;
            tags: number[];
            store ? : number;
            /**
             * superAdmin的話不是pendingPublish就是draft,其他身份點擊儲存並審核則帶pendingReview,不然就是draft
             */
            status: "pendingReview" | "draft";
            editor ? : string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台更新文章] - no description
     */
    "put@admin/update/posts": {
        body: {
            contents: {
                locale: string;
                title: string;
                uuid: string;
                content: string;
                seoDescription: string;
                image: {
                    id: number;
                    url: string;
                };
            } [];
            urlSuffix: string;
            /**
             * 立即 now, 預約reserve
             */
            publishType: "now" | "reserve";
            publishStart: string;
            publishEnd ? : string;
            publisher ? : string;
            type: number;
            firstCategory: number;
            secondCategory ? : number;
            tags: number[];
            store ? : number;
            /**
             * superAdmin的話不是pendingPublish就是draft,其他身份點擊儲存並審核則帶pendingReview,不然就是draft
             */
            status: "pendingReview" | "draft";
            editor ? : string;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台刪除文章 （用put)] - no description
     * @param {string} uuid - 文章uuid
     */
    "put@admin/delete/posts/:uuid": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台審核文章] - no description
     */
    "put@admin/posts/review": {
        body: {
            contents: {
                /**
                 * 文章語系
                 */
                locale: string;
                /**
                 * 退件原因
                 */
                reasonForReject: string;
                /**
                 * 文章uuid
                 */
                uuid: string;
            } [];
            /**
             * 1表示核准，0則否
             */
            isApproved ? : 0 | 1;
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [後台列表撤回文章] - no description
     * @param {string} uuid - 文章uuid
     */
    "put@admin/posts/:uuid/withdraw": {
        body: null;
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取得文章狀態變化的歷史資料] - no description
     * @param {string} uuid - 文章uuid
     */
    "get@admin/posts/:uuid/history": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                status: string;
                username: string;
                createdAt: string;
                description: string;
                reasonForReject: string;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [藥房] - no description
     */
    "get@admin/search/stores": {
        body: null;
        query: {
            type ? : string;
            area ? : string;
            district ? : string;
            adType ? : string;
            stockType ? : string;
            status ? : string;
            keyword ? : string;
            perPage ? : number;
            page ? : number;
        };
        response: {
            msg: string;
            data: {
                uuid: string;
                imgUrl: string;
                name: string;
                area: string;
                district: string;
                address: string;
                type: string;
                adType: string;
                stockType: string;
                status: boolean;
            } [];
            pagination: {
                /**
                 * 起始頁數
                 * @example 1
                 */
                page: number;
                /**
                 * 每頁資料筆數
                 * @example 10
                 */
                pageSize: number;
                /**
                 * 總頁數
                 * @example 23
                 */
                pageCount: number;
                /**
                 * 總筆數
                 * @example 236
                 */
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [藥房] - no description
     * @param {string} uuid - 藥房唯一代碼
     */
    "get@admin/stores/detail/:uuid": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                uuid: string;
                /**
                 * 狀態
                 * @example true
                 */
                status: boolean;
                stockType: string;
                type: string;
                rxNo: string;
                stockUrl: string;
                stockSyncParams: {
                    /**
                     * 庫存 erp 系統  location_id
                     * @example 1
                     */
                    location_id: number;
                };
                adType: string;
                tel: string;
                name: {
                    zh: string;
                    "zh-CN": string;
                    en: string;
                };
                address: {
                    zh: string;
                    "zh-CN": string;
                    en: string;
                };
                lat: number;
                lng: number;
                contactNumber: string;
                /**
                 * 國碼
                 * @example 886
                 */
                mobileCountryCode: string;
                businessHours: string;
                openingHours: {
                    /**
                     * 本日公休 isClosed=1 則 startTime 跟 endTime 輸出 00:00:00
                     * @example 1
                     */
                    isClosed: number;
                    /**
                     * isoWeekday 1-7， 週日為 7
                     * @example 1
                     */
                    weekday: number;
                    /**
                     * 營業時間
                     * @example 00:00:00
                     */
                    startTime: string;
                    /**
                     * @example 43200
                     */
                    endTime: string;
                } [];
                isExcellent: boolean;
                isGenuine: boolean;
                website: string;
                plan: {
                    /**
                     * @example nextgen@nextgen.com.hk
                     */
                    email: string;
                    /**
                     * @example NextgenTravelTechnology
                     */
                    messanger: string;
                    /**
                     * @example nextgentechco
                     */
                    instagram: string;
                    /**
                     * @example 85263111356
                     */
                    whatsapp: string;
                    wechat: {
                        /**
                         * @example 女生秘物網購
                         */
                        title: string;
                        /**
                         * @example girlssecrets_shop
                         */
                        appId: string;
                        /**
                         * @example https://s3.ap-southeast-1.amazonaws.com/medicine-s3.cloudsatlas.com.hk/qrcode_for_gh_1b9715c09cc3_1280_1_42ca67a97d.jpg
                         */
                        qrcode: string;
                    };
                };
                planType: string;
                content: {
                    zh: string;
                    "zh-CN": string;
                    en: string;
                };
                area: {
                    key: string;
                    name: string;
                };
                district: {
                    key: string;
                    name: string;
                };
                tags: {
                    id: number;
                    name: string;
                } [];
                mainServices: {
                    id: number;
                    name: string;
                } [];
                services: {
                    id: number;
                    name: string;
                } [];
                images: {
                    id: number;
                    url: string;
                } [];
                priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
            };
        };
        contentType: null;
    };
    /**
     * [修改 藥房] - no description
     * @param {string} uuid - 藥房唯一代碼
     */
    "post@admin/stores/:uuid": {
        body: {
            /**
             * 狀態
             * @example true
             */
            status: boolean;
            /**
             * 優先度，高的優先輸出
             */
            priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
            /**
             * 方案類型
             */
            planType: string;
            /**
             * 廣告類型
             */
            adType: string;
            /**
             * 庫存類型
             */
            stockType: string;
            /**
             * 庫存 api
             */
            stockUrl: string;
            stockSyncParams: {
                /**
                 * 庫存 erp 系統  location_id
                 * @example 1
                 */
                location_id: number;
            };
            /**
             * 聯絡電話
             * @example 1234567890
             */
            tel: string;
            /**
             * 類型
             */
            type: string;
            isExcellent: boolean;
            /**
             * @example true
             */
            isGenuine: boolean;
            /**
             * rxNo
             */
            rxNo: string;
            name: {
                /**
                 * @example 良躍社區藥房
                 */
                zh: string;
                /**
                 * @example 良跃社区药房
                 */
                "zh-CN": string;
                /**
                 * @example A-LIVELY COMMUNITY PHARMACY O/B ABERDEEN KAI-FONG WELFARE ASSOCIATION LIMITED
                 */
                en: string;
            };
            /**
             * 聯絡電話
             */
            contactNumber: string;
            /**
             * 國碼
             * @example 886
             */
            mobileCountryCode: string;
            address: {
                /**
                 * @example 安和路
                 */
                zh: string;
                /**
                 * @example 安和路
                 */
                "zh-CN": string;
                /**
                 * @example Anhe Road
                 */
                en: string;
            };
            /**
             * 緯度
             * @example 22.25193195
             */
            lat: number;
            /**
             * 經度
             * @example 114.13825551
             */
            lng: number;
            /**
             * 區域
             * @example HONG_KONG_ISLAND
             */
            area: string;
            /**
             * 行政區域
             * @example WAN_CHAI
             */
            district: string;
            /**
             * 營業時間
             */
            businessHours: string;
            openingHours: {
                /**
                 * 本日公休 isClosed=1 則 startTime 跟 endTime 輸出 00:00:00
                 * @example 1
                 */
                isClosed: number;
                /**
                 * isoWeekday 1-7， 週日為 7
                 * @example 1
                 */
                weekday: number;
                /**
                 * 營業時間
                 * @example 00:00:00
                 */
                startTime: string;
                /**
                 * @example 43200
                 */
                endTime: string;
            } [];
            /**
             * 網站
             */
            website: string;
            content: {
                zh: string;
                "zh-CN": string;
                en: string;
            };
            tags: number[];
            mainServices: number[];
            services: number[];
            images: number[];
            plan: {
                /**
                 * @example nextgen@nextgen.com.hk
                 */
                email: string;
                /**
                 * @example NextgenTravelTechnology
                 */
                messanger: string;
                /**
                 * @example nextgentechco
                 */
                instagram: string;
                /**
                 * @example 85263111356
                 */
                whatsapp: string;
                wechat: {
                    /**
                     * @example 女生秘物網購
                     */
                    title: string;
                    /**
                     * @example girlssecrets_shop
                     */
                    appId: string;
                    /**
                     * @example https://s3.ap-southeast-1.amazonaws.com/medicine-s3.cloudsatlas.com.hk/qrcode_for_gh_1b9715c09cc3_1280_1_42ca67a97d.jpg
                     */
                    qrcode: string;
                };
            };
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [取得新藥房 uuid] - no description
     */
    "get@admin/stores/uuid": {
        body: null;
        query: null;
        response: {
            msg: string;
            /**
             * @example 0089adf3-187e-4882-b831-e5eb6612f587
             */
            data: string;
        };
        contentType: null;
    };
    /**
     * [新增 藥房] - no description
     * @param {string} uuid - 藥房唯一代碼
     */
    "post@admin/stores/:uuid/create": {
        body: {
            /**
             * 狀態
             * @example true
             */
            status: boolean;
            /**
             * 優先度，高的優先輸出
             */
            priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
            /**
             * 方案類型
             */
            planType: string;
            /**
             * 廣告類型
             */
            adType: string;
            /**
             * 庫存類型
             */
            stockType: string;
            /**
             * 庫存 api
             */
            stockUrl: string;
            stockSyncParams: {
                /**
                 * 庫存 erp 系統  location_id
                 * @example 1
                 */
                location_id: number;
            };
            /**
             * 聯絡電話
             * @example 1234567890
             */
            tel: string;
            /**
             * 類型
             */
            type: string;
            isExcellent: boolean;
            /**
             * @example true
             */
            isGenuine: boolean;
            /**
             * rxNo
             */
            rxNo: string;
            name: {
                /**
                 * @example 良躍社區藥房
                 */
                zh: string;
                /**
                 * @example 良跃社区药房
                 */
                "zh-CN": string;
                /**
                 * @example A-LIVELY COMMUNITY PHARMACY O/B ABERDEEN KAI-FONG WELFARE ASSOCIATION LIMITED
                 */
                en: string;
            };
            /**
             * 聯絡電話
             */
            contactNumber: string;
            /**
             * 國碼
             * @example 886
             */
            mobileCountryCode: string;
            address: {
                /**
                 * @example 安和路
                 */
                zh: string;
                /**
                 * @example 安和路
                 */
                "zh-CN": string;
                /**
                 * @example Anhe Road
                 */
                en: string;
            };
            /**
             * 緯度
             * @example 22.25193195
             */
            lat: number;
            /**
             * 經度
             * @example 114.13825551
             */
            lng: number;
            /**
             * 區域
             * @example HONG_KONG_ISLAND
             */
            area: string;
            /**
             * 行政區域
             * @example WAN_CHAI
             */
            district: string;
            /**
             * 營業時間
             */
            businessHours: string;
            openingHours: {
                /**
                 * 本日公休 isClosed=1 則 startTime 跟 endTime 輸出 00:00:00
                 * @example 1
                 */
                isClosed: number;
                /**
                 * isoWeekday 1-7， 週日為 7
                 * @example 1
                 */
                weekday: number;
                /**
                 * 營業時間
                 * @example 00:00:00
                 */
                startTime: string;
                /**
                 * @example 43200
                 */
                endTime: string;
            } [];
            /**
             * 網站
             */
            website: string;
            content: {
                zh: string;
                "zh-CN": string;
                en: string;
            };
            tags: number[];
            mainServices: number[];
            services: number[];
            images: number[];
            plan: {
                /**
                 * @example nextgen@nextgen.com.hk
                 */
                email: string;
                /**
                 * @example NextgenTravelTechnology
                 */
                messanger: string;
                /**
                 * @example nextgentechco
                 */
                instagram: string;
                /**
                 * @example 85263111356
                 */
                whatsapp: string;
                wechat: {
                    /**
                     * @example 女生秘物網購
                     */
                    title: string;
                    /**
                     * @example girlssecrets_shop
                     */
                    appId: string;
                    /**
                     * @example https://s3.ap-southeast-1.amazonaws.com/medicine-s3.cloudsatlas.com.hk/qrcode_for_gh_1b9715c09cc3_1280_1_42ca67a97d.jpg
                     */
                    qrcode: string;
                };
            };
        };
        query: null;
        response: {
            msg: string;
        };
        contentType: null;
    };
    /**
     * [藥房 類型] - no description
     */
    "get@admin/stores/options/types": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房 方案] - no description
     */
    "get@admin/stores/options/planTypes": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房廣告類型] - no description
     */
    "get@admin/stores/options/adTypes": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房庫存方案] - no description
     */
    "get@admin/stores/options/stockTypes": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example default
                 */
                key: string;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房 Tags] - no description
     */
    "get@admin/stores/options/tags": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房 主要服務] - no description
     */
    "get@admin/stores/options/mainServices": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [藥房 服務] - no description
     */
    "get@admin/stores/options/services": {
        body: null;
        query: null;
        response: {
            /**
             * @example Success
             */
            msg: string;
            data: {
                /**
                 * 用來執行搜尋用的參數
                 * @example 1
                 */
                key: number;
                /**
                 * 顯示名稱
                 * @example 名稱
                 */
                value: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [取的香港行政區域] - no description
     */
    "get@admin/stores/options/districts": {
        body: null;
        query: null;
        response: {
            msg: string;
            data: {
                /**
                 * 行政區域代碼
                 */
                key: string;
                /**
                 * 行政區域 名稱
                 */
                value: string;
                /**
                 * 區域代碼
                 */
                areaKey: string;
                /**
                 * 區域名稱
                 */
                area: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取後台文章標籤] - no description
     */
    "get@admin/post-tags": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                tagName: string;
            } [];
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取後台文章類別] - no description
     */
    "get@admin/post-types": {
        body: null;
        query: null;
        response: {
            data: {
                id: number;
                name: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取後台文章分類] - no description
     */
    "get@admin/post-categories": {
        body: null;
        query: {
            parentId ? : string;
        };
        response: {
            data: {
                id: number;
                name: string;
            } [];
        };
        contentType: null;
    };
    /**
     * [獲取後台藥品列表] - no description
     */
    "get@admin/drugs": {
        body: null;
        query: {
            /**
             * @example 3535
             */
            keyword ? : string;
            page ? : string;
            perPage ? : string;
            /**
             * @example 1 or 0
             */
            enable ? : string;
        };
        response: {
            msg: string;
            data: {
                id: number;
                permitNo: string;
                productName: string;
                productName_zh: string;
                enable: number;
                priority: number;
            } [];
            pagination: {
                page: number;
                pageSize: string;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
    /**
     * [獲取後台藥品審核列表] - no description
     */
    "get@admin/drug-updates": {
        body: null;
        query: {
            /**
             * @example 3535
             */
            keyword ? : string;
            page ? : string;
            perPage ? : string;
        };
        response: {
            msg: string;
            data: {
                id: number;
                permitNo: string;
                productName: string;
                productName_zh: string;
                count: string;
                latestCreatedAt: string;
            } [];
            pagination: {
                page: number;
                pageSize: string;
                pageCount: number;
                total: number;
            };
        };
        contentType: null;
    };
}