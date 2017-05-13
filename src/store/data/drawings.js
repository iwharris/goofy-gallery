import moment from 'moment';
import QueryString from 'query-string';
import fetch from 'isomorphic-fetch';

import animals from './animals';
import users from './users';

import ApiConstants from '../../api/constants';

const drawings = {
    "ok": true,
    "files": [
        {
            "id": "F5DPPJ01L",
            "timestamp": 1494623178,
            "name": "Drawing(5).jpeg",
            "title": "Drawing(5).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5DPPJ01L/drawing_5_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5DPPJ01L/download/drawing_5_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5DPPJ01L-09038cccfa/drawing_5__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5DPPJ01L-09038cccfa/drawing_5__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5DPPJ01L-09038cccfa/drawing_5__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5DPPJ01L-09038cccfa/drawing_5__720.jpg",
            "original_w": 1003,
            "original_h": 635,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F5DPPJ01L/drawing_5_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "no_entry",
                    "users": [
                        "U13FJA80G",
                        "U2D7F59RU",
                        "U2CL304CW",
                        "U1324MZRS"
                    ],
                    "count": 4
                },
                {
                    "name": "ram",
                    "users": [
                        "U2G1VV7AR",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F5D04C5DY",
            "timestamp": 1494623089,
            "name": "Pasted image at 2017_05_12 03_04 PM.png",
            "title": "Surf's Up",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5D04C5DY/pasted_image_at_2017_05_12_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5D04C5DY/download/pasted_image_at_2017_05_12_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5D04C5DY-198f3f6ba5/pasted_image_at_2017_05_12_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5D04C5DY-198f3f6ba5/pasted_image_at_2017_05_12_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5D04C5DY-198f3f6ba5/pasted_image_at_2017_05_12_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5D04C5DY-198f3f6ba5/pasted_image_at_2017_05_12_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5D04C5DY-198f3f6ba5/pasted_image_at_2017_05_12_03_04_pm_1024.png",
            "original_w": 1455,
            "original_h": 862,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F5D04C5DY/pasted_image_at_2017_05_12_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "sun_with_face",
                    "users": [
                        "U2G1VV7AR",
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 3
                },
                {
                    "name": "surfer",
                    "users": [
                        "U2PG17XKJ",
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F5CTCU0UT",
            "timestamp": 1494623039,
            "name": "Pasted image at 2017_05_12 03_03 PM.png",
            "title": "Komondor",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5CTCU0UT/pasted_image_at_2017_05_12_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5CTCU0UT/download/pasted_image_at_2017_05_12_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCU0UT-4faa9dff30/pasted_image_at_2017_05_12_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCU0UT-4faa9dff30/pasted_image_at_2017_05_12_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCU0UT-4faa9dff30/pasted_image_at_2017_05_12_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCU0UT-4faa9dff30/pasted_image_at_2017_05_12_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCU0UT-4faa9dff30/pasted_image_at_2017_05_12_03_03_pm_1024.png",
            "original_w": 1080,
            "original_h": 1726,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F5CTCU0UT/pasted_image_at_2017_05_12_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "dog2",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5C9VNZ4Y",
            "timestamp": 1494623034,
            "name": "Screen Shot 2017-05-12 at 3.02.47 PM.png",
            "title": "Screen Shot 2017-05-12 at 3.02.47 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5C9VNZ4Y/screen_shot_2017-05-12_at_3.02.47_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5C9VNZ4Y/download/screen_shot_2017-05-12_at_3.02.47_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5C9VNZ4Y-ef28ee2976/screen_shot_2017-05-12_at_3.02.47_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5C9VNZ4Y-ef28ee2976/screen_shot_2017-05-12_at_3.02.47_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5C9VNZ4Y-ef28ee2976/screen_shot_2017-05-12_at_3.02.47_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5C9VNZ4Y-ef28ee2976/screen_shot_2017-05-12_at_3.02.47_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5C9VNZ4Y-ef28ee2976/screen_shot_2017-05-12_at_3.02.47_pm_1024.png",
            "original_w": 2068,
            "original_h": 1036,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F5C9VNZ4Y/screen_shot_2017-05-12_at_3.02.47_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "eyes",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "bus",
                    "users": [
                        "U2G1VV7AR"
                    ],
                    "count": 1
                },
                {
                    "name": "sunglasses",
                    "users": [
                        "U2HN6FYRM",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "beers",
                    "users": [
                        "U2PKVNC87",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F5CTCQD0B",
            "timestamp": 1494623028,
            "name": "image.png",
            "title": "Slack for Android Upload",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5CTCQD0B/image.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5CTCQD0B/download/image.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCQD0B-3f6d9b5bf3/image_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCQD0B-3f6d9b5bf3/image_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCQD0B-3f6d9b5bf3/image_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCQD0B-3f6d9b5bf3/image_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCQD0B-3f6d9b5bf3/image_1024.png",
            "original_w": 1440,
            "original_h": 2112,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F5CTCQD0B/image.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G",
                        "U2HN6FYRM",
                        "U1324MZRS"
                    ],
                    "count": 3
                },
                {
                    "name": "wind_blowing_face",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5CTCKC75",
            "timestamp": 1494623006,
            "name": "Screen Shot 2017-05-12 at 3.02.57 PM.png",
            "title": "I don't know...",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U47UK2SN6",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5CTCKC75/screen_shot_2017-05-12_at_3.02.57_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5CTCKC75/download/screen_shot_2017-05-12_at_3.02.57_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCKC75-fdb6efa838/screen_shot_2017-05-12_at_3.02.57_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCKC75-fdb6efa838/screen_shot_2017-05-12_at_3.02.57_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCKC75-fdb6efa838/screen_shot_2017-05-12_at_3.02.57_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5CTCKC75-fdb6efa838/screen_shot_2017-05-12_at_3.02.57_pm_720.png",
            "original_w": 934,
            "original_h": 660,
            "permalink": "https://appdirect.slack.com/files/brenna.devlin/F5CTCKC75/screen_shot_2017-05-12_at_3.02.57_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "thinking_face",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "fried_shrimp",
                    "users": [
                        "U2PKVNC87",
                        "U08P10WPQ",
                        "U1324MZRS"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F5D1JKBSQ",
            "timestamp": 1494622982,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5D1JKBSQ/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5D1JKBSQ/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5D1JKBSQ-c3c35763b7/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5D1JKBSQ-c3c35763b7/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5D1JKBSQ-c3c35763b7/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5D1JKBSQ-c3c35763b7/drawing_720.jpg",
            "original_w": 721,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F5D1JKBSQ/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2G4XKRRU",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "writing_hand",
                    "users": [
                        "U054FNLPS",
                        "U1324MZRS",
                        "U08P10WPQ"
                    ],
                    "count": 3
                },
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ",
                        "U1324MZRS"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F5D2WJX61",
            "timestamp": 1494622981,
            "name": "Screen Shot 2017-05-12 at 2.02.34 PM.png",
            "title": "Komondor loves you!",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5D2WJX61/screen_shot_2017-05-12_at_2.02.34_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5D2WJX61/download/screen_shot_2017-05-12_at_2.02.34_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5D2WJX61-42074ba349/screen_shot_2017-05-12_at_2.02.34_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5D2WJX61-42074ba349/screen_shot_2017-05-12_at_2.02.34_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5D2WJX61-42074ba349/screen_shot_2017-05-12_at_2.02.34_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5D2WJX61-42074ba349/screen_shot_2017-05-12_at_2.02.34_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5D2WJX61-42074ba349/screen_shot_2017-05-12_at_2.02.34_pm_1024.png",
            "original_w": 1548,
            "original_h": 1622,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F5D2WJX61/screen_shot_2017-05-12_at_2.02.34_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "lion_face",
                    "users": [
                        "U2PG17XKJ",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G",
                        "U2KRMJ9MM",
                        "U1324MZRS"
                    ],
                    "count": 3
                },
                {
                    "name": "trophy",
                    "users": [
                        "U0ZV9NY93",
                        "U2CL304CW",
                        "U2KRMJ9MM",
                        "U2PKVNC87",
                        "U13FJA80G",
                        "U27DJ3JT0",
                        "U1324MZRS",
                        "U1000HJ8H",
                        "U08P10WPQ"
                    ],
                    "count": 9
                },
                {
                    "name": "+1",
                    "users": [
                        "U47UK2SN6",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "heart",
                    "users": [
                        "U2G4XKRRU",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "dog",
                    "users": [
                        "U2PKVNC87",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F5D2WJFV3",
            "timestamp": 1494622979,
            "name": "Screen Shot 2017-05-12 at 3.02.34 PM.png",
            "title": "Screen Shot 2017-05-12 at 3.02.34 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5D2WJFV3/screen_shot_2017-05-12_at_3.02.34_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5D2WJFV3/download/screen_shot_2017-05-12_at_3.02.34_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5D2WJFV3-f2f1bcea18/screen_shot_2017-05-12_at_3.02.34_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5D2WJFV3-f2f1bcea18/screen_shot_2017-05-12_at_3.02.34_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5D2WJFV3-f2f1bcea18/screen_shot_2017-05-12_at_3.02.34_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5D2WJFV3-f2f1bcea18/screen_shot_2017-05-12_at_3.02.34_pm_720.png",
            "original_w": 856,
            "original_h": 650,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F5D2WJFV3/screen_shot_2017-05-12_at_3.02.34_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pma",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "poodle",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5CTC5PKM",
            "timestamp": 1494622942,
            "name": "Drawing (9).jpeg",
            "title": "Drawing (9).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5CTC5PKM/drawing__9_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5CTC5PKM/download/drawing__9_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5CTC5PKM-e10c5e6534/drawing__9__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5CTC5PKM-e10c5e6534/drawing__9__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5CTC5PKM-e10c5e6534/drawing__9__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5CTC5PKM-e10c5e6534/drawing__9__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5CTC5PKM-e10c5e6534/drawing__9__1024.jpg",
            "original_w": 1695,
            "original_h": 900,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F5CTC5PKM/drawing__9_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U0B52QL07",
                        "U1324MZRS",
                        "U3ATVB16Y"
                    ],
                    "count": 3
                },
                {
                    "name": "heart_eyes",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "baby",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5DQ67M8X",
            "timestamp": 1494622936,
            "name": "Screen Shot 2017-05-12 at 3.02.05 PM.png",
            "title": "Screen Shot 2017-05-12 at 3.02.05 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5DQ67M8X/screen_shot_2017-05-12_at_3.02.05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5DQ67M8X/download/screen_shot_2017-05-12_at_3.02.05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5DQ67M8X-1d731d1be8/screen_shot_2017-05-12_at_3.02.05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5DQ67M8X-1d731d1be8/screen_shot_2017-05-12_at_3.02.05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5DQ67M8X-1d731d1be8/screen_shot_2017-05-12_at_3.02.05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5DQ67M8X-1d731d1be8/screen_shot_2017-05-12_at_3.02.05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5DQ67M8X-1d731d1be8/screen_shot_2017-05-12_at_3.02.05_pm_1024.png",
            "original_w": 2072,
            "original_h": 1236,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F5DQ67M8X/screen_shot_2017-05-12_at_3.02.05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "confused",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "trophy",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5DQ67BDM",
            "timestamp": 1494622934,
            "name": "Doggie.jpg",
            "title": "Doggie.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5DQ67BDM/doggie.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5DQ67BDM/download/doggie.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5DQ67BDM-0fb6f48d6c/doggie_360.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5DQ67BDM-0fb6f48d6c/doggie_160.jpg",
            "original_w": 300,
            "original_h": 300,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F5DQ67BDM/doggie.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "eyes",
                    "users": [
                        "U2PG17XKJ",
                        "U054FNLPS",
                        "U1324MZRS",
                        "U1000HJ8H"
                    ],
                    "count": 4
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "trophy",
                    "users": [
                        "U2HN6FYRM",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "cloud",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5CTC304T",
            "timestamp": 1494622929,
            "name": "Pasted image at 2017_05_12 03_02 PM.png",
            "title": "Pasted image at 2017-05-12, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5CTC304T/pasted_image_at_2017_05_12_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5CTC304T/download/pasted_image_at_2017_05_12_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5CTC304T-ef389953ad/pasted_image_at_2017_05_12_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5CTC304T-ef389953ad/pasted_image_at_2017_05_12_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5CTC304T-ef389953ad/pasted_image_at_2017_05_12_03_02_pm_160.png",
            "original_w": 554,
            "original_h": 436,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F5CTC304T/pasted_image_at_2017_05_12_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2G4XKRRU",
                        "U27CYR4BF",
                        "U054FNLPS",
                        "U08P10WPQ",
                        "U1324MZRS"
                    ],
                    "count": 5
                },
                {
                    "name": "sweat_drops",
                    "users": [
                        "U2PKVNC87",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "fire",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "dusty_stick",
                    "users": [
                        "U2G1VV7AR",
                        "U1324MZRS",
                        "U08P10WPQ"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F5D1H8XEY",
            "timestamp": 1494622839,
            "name": "Pasted image at 2017_05_12 03_00 PM.png",
            "title": "Pasted image at 2017-05-12, 3:00 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5D1H8XEY/pasted_image_at_2017_05_12_03_00_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5D1H8XEY/download/pasted_image_at_2017_05_12_03_00_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5D1H8XEY-843a5c0e5d/pasted_image_at_2017_05_12_03_00_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5D1H8XEY-843a5c0e5d/pasted_image_at_2017_05_12_03_00_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5D1H8XEY-843a5c0e5d/pasted_image_at_2017_05_12_03_00_pm_160.png",
            "original_w": 620,
            "original_h": 372,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F5D1H8XEY/pasted_image_at_2017_05_12_03_00_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc5D1HADJ8",
                "timestamp": 1494622839,
                "user": "U27DJ3JT0",
                "is_intro": true,
                "comment": ":clock1:"
            },
            "reactions": [
                {
                    "name": "wink",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "unicorn_face",
                    "users": [
                        "U08P10WPQ",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F59JNT8BE",
            "timestamp": 1494018338,
            "name": "Ideas - 54.png",
            "title": "Beau's Cyook",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F59JNT8BE/ideas_-_54.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F59JNT8BE/download/ideas_-_54.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F59JNT8BE-a711ae208e/ideas_-_54_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F59JNT8BE-a711ae208e/ideas_-_54_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F59JNT8BE-a711ae208e/ideas_-_54_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F59JNT8BE-a711ae208e/ideas_-_54_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F59JNT8BE-a711ae208e/ideas_-_54_1024.png",
            "original_w": 1080,
            "original_h": 1726,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F59JNT8BE/ideas_-_54.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM",
                        "U0ZV9NY93"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F5ABW23CP",
            "timestamp": 1494018246,
            "name": "Drawing (1).png",
            "title": "Drawing (1).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27D07RKN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5ABW23CP/drawing__1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5ABW23CP/download/drawing__1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5ABW23CP-6c8ad025ce/drawing__1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5ABW23CP-6c8ad025ce/drawing__1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5ABW23CP-6c8ad025ce/drawing__1__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5ABW23CP-6c8ad025ce/drawing__1__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5ABW23CP-6c8ad025ce/drawing__1__1024.png",
            "original_w": 1455,
            "original_h": 876,
            "permalink": "https://appdirect.slack.com/files/jernej.klancic/F5ABW23CP/drawing__1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pma",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F590J3D25",
            "timestamp": 1494018231,
            "name": "Screen Shot 2017-05-05 at 3.03.40 PM.png",
            "title": "Screen Shot 2017-05-05 at 3.03.40 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0B52QL07",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F590J3D25/screen_shot_2017-05-05_at_3.03.40_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F590J3D25/download/screen_shot_2017-05-05_at_3.03.40_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F590J3D25-e7c2704d10/screen_shot_2017-05-05_at_3.03.40_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F590J3D25-e7c2704d10/screen_shot_2017-05-05_at_3.03.40_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F590J3D25-e7c2704d10/screen_shot_2017-05-05_at_3.03.40_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F590J3D25-e7c2704d10/screen_shot_2017-05-05_at_3.03.40_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F590J3D25-e7c2704d10/screen_shot_2017-05-05_at_3.03.40_pm_1024.png",
            "original_w": 2416,
            "original_h": 1008,
            "permalink": "https://appdirect.slack.com/files/aneet.sachdeva/F590J3D25/screen_shot_2017-05-05_at_3.03.40_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F59F24143",
            "timestamp": 1494018231,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKR3B2S",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F59F24143/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F59F24143/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F59F24143-00c55e6fa7/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F59F24143-00c55e6fa7/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F59F24143-00c55e6fa7/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F59F24143-00c55e6fa7/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F59F24143-00c55e6fa7/drawing_1024.png",
            "original_w": 1217,
            "original_h": 692,
            "permalink": "https://appdirect.slack.com/files/darnell.shinbine/F59F24143/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "wink",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F59KZM0E9",
            "timestamp": 1494018215,
            "name": "Pasted image at 2017_05_05 03_03 PM.png",
            "title": "Pasted image at 2017-05-05, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F59KZM0E9/pasted_image_at_2017_05_05_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F59KZM0E9/download/pasted_image_at_2017_05_05_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F59KZM0E9-0693b3d0e8/pasted_image_at_2017_05_05_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F59KZM0E9-0693b3d0e8/pasted_image_at_2017_05_05_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F59KZM0E9-0693b3d0e8/pasted_image_at_2017_05_05_03_03_pm_160.png",
            "original_w": 518,
            "original_h": 287,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F59KZM0E9/pasted_image_at_2017_05_05_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "eyeglasses",
                    "users": [
                        "U1000HJ8H",
                        "U2DU3TZL7",
                        "U0ZV9NY93"
                    ],
                    "count": 3
                },
                {
                    "name": "fire",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "hankey",
                    "users": [
                        "U2PKVNC87"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5ABBHT8W",
            "timestamp": 1494018208,
            "name": "Screen Shot 2017-05-05 at 3.03.15 PM.png",
            "title": "Screen Shot 2017-05-05 at 3.03.15 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5ABBHT8W/screen_shot_2017-05-05_at_3.03.15_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5ABBHT8W/download/screen_shot_2017-05-05_at_3.03.15_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBHT8W-58cda27e3a/screen_shot_2017-05-05_at_3.03.15_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBHT8W-58cda27e3a/screen_shot_2017-05-05_at_3.03.15_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBHT8W-58cda27e3a/screen_shot_2017-05-05_at_3.03.15_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBHT8W-58cda27e3a/screen_shot_2017-05-05_at_3.03.15_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBHT8W-58cda27e3a/screen_shot_2017-05-05_at_3.03.15_pm_1024.png",
            "original_w": 1736,
            "original_h": 1348,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F5ABBHT8W/screen_shot_2017-05-05_at_3.03.15_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "disappointed",
                    "users": [
                        "U2DU3TZL7",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F59F1QN03",
            "timestamp": 1494018201,
            "name": "Pasted image at 2017_05_05 03_03 PM.png",
            "title": "Pasted image at 2017-05-05, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F59F1QN03/pasted_image_at_2017_05_05_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F59F1QN03/download/pasted_image_at_2017_05_05_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F59F1QN03-9e5a3ff97f/pasted_image_at_2017_05_05_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F59F1QN03-9e5a3ff97f/pasted_image_at_2017_05_05_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F59F1QN03-9e5a3ff97f/pasted_image_at_2017_05_05_03_03_pm_160.png",
            "original_w": 583,
            "original_h": 339,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F59F1QN03/pasted_image_at_2017_05_05_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2DU3TZL7",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F5ABBEJS2",
            "timestamp": 1494018190,
            "name": "Pasted image at 2017_05_05 03_03 PM.png",
            "title": "a bit of a pickle",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5ABBEJS2/pasted_image_at_2017_05_05_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5ABBEJS2/download/pasted_image_at_2017_05_05_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBEJS2-51e939797e/pasted_image_at_2017_05_05_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBEJS2-51e939797e/pasted_image_at_2017_05_05_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBEJS2-51e939797e/pasted_image_at_2017_05_05_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBEJS2-51e939797e/pasted_image_at_2017_05_05_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBEJS2-51e939797e/pasted_image_at_2017_05_05_03_03_pm_1024.png",
            "original_w": 1329,
            "original_h": 446,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F5ABBEJS2/pasted_image_at_2017_05_05_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "hamburger",
                    "users": [
                        "U2A658R7U",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F59F1NSBD",
            "timestamp": 1494018190,
            "name": "Drawing (3).png",
            "title": "Drawing (3).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F59F1NSBD/drawing__3_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F59F1NSBD/download/drawing__3_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F59F1NSBD-222ede7377/drawing__3__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F59F1NSBD-222ede7377/drawing__3__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F59F1NSBD-222ede7377/drawing__3__160.png",
            "original_w": 668,
            "original_h": 656,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F59F1NSBD/drawing__3_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U1000HJ8H",
                        "U2KRMJ9MM",
                        "U211SR63A",
                        "U2HN6FYRM",
                        "U2CL304CW",
                        "U0J6ZJTDM",
                        "U0ZV9NY93",
                        "U08P10WPQ",
                        "U1324MZRS"
                    ],
                    "count": 9
                },
                {
                    "name": "smile",
                    "users": [
                        "U1324MZRS",
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 3
                },
                {
                    "name": "trophy",
                    "users": [
                        "U2CL304CW",
                        "U0ZV9NY93",
                        "U0J6ZJTDM",
                        "U1000HJ8H",
                        "U47UK2SN6",
                        "U08P10WPQ",
                        "U27DJ3JT0",
                        "U1324MZRS"
                    ],
                    "count": 8
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U1000HJ8H",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "white_check_mark",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "cake",
                    "users": [
                        "U2PKVNC87"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5ABVHV1V",
            "timestamp": 1494018190,
            "name": "Screen Shot 2017-05-05 at 3.02.40 PM.png",
            "title": "Cme",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5ABVHV1V/screen_shot_2017-05-05_at_3.02.40_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5ABVHV1V/download/screen_shot_2017-05-05_at_3.02.40_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5ABVHV1V-201e867593/screen_shot_2017-05-05_at_3.02.40_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5ABVHV1V-201e867593/screen_shot_2017-05-05_at_3.02.40_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5ABVHV1V-201e867593/screen_shot_2017-05-05_at_3.02.40_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5ABVHV1V-201e867593/screen_shot_2017-05-05_at_3.02.40_pm_720.png",
            "original_w": 734,
            "original_h": 581,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F5ABVHV1V/screen_shot_2017-05-05_at_3.02.40_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F5ABBCXNJ",
            "timestamp": 1494018181,
            "name": "Screen Shot 2017-05-05 at 3.02.44 PM.png",
            "title": "Screen Shot 2017-05-05 at 3.02.44 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5ABBCXNJ/screen_shot_2017-05-05_at_3.02.44_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5ABBCXNJ/download/screen_shot_2017-05-05_at_3.02.44_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBCXNJ-3127cbcc67/screen_shot_2017-05-05_at_3.02.44_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBCXNJ-3127cbcc67/screen_shot_2017-05-05_at_3.02.44_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBCXNJ-3127cbcc67/screen_shot_2017-05-05_at_3.02.44_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBCXNJ-3127cbcc67/screen_shot_2017-05-05_at_3.02.44_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5ABBCXNJ-3127cbcc67/screen_shot_2017-05-05_at_3.02.44_pm_1024.png",
            "original_w": 1720,
            "original_h": 1330,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F5ABBCXNJ/screen_shot_2017-05-05_at_3.02.44_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "ice_hockey_stick_and_puck",
                    "users": [
                        "U2PKVNC87",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "flames",
                    "users": [
                        "U2DU3TZL7",
                        "U2A6A9FR8",
                        "U47UK2SN6",
                        "U1324MZRS"
                    ],
                    "count": 4
                },
                {
                    "name": "-1",
                    "users": [
                        "U2PKR3B2S"
                    ],
                    "count": 1
                },
                {
                    "name": "eyes",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F59F1JT19",
            "timestamp": 1494018175,
            "name": "Image uploaded from iOS.jpg",
            "title": "Image uploaded from iOS",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0J6ZJTDM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F59F1JT19/image_uploaded_from_ios.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F59F1JT19/download/image_uploaded_from_ios.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F59F1JT19-cf6def8b2e/image_uploaded_from_ios_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F59F1JT19-cf6def8b2e/image_uploaded_from_ios_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F59F1JT19-cf6def8b2e/image_uploaded_from_ios_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F59F1JT19-cf6def8b2e/image_uploaded_from_ios_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F59F1JT19-cf6def8b2e/image_uploaded_from_ios_1024.jpg",
            "original_w": 1242,
            "original_h": 1492,
            "permalink": "https://appdirect.slack.com/files/arjun.krishna/F59F1JT19/image_uploaded_from_ios.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "sunglasses",
                    "users": [
                        "U2PKVNC87",
                        "U2A658R7U",
                        "U1324MZRS"
                    ],
                    "count": 3
                },
                {
                    "name": "white_check_mark",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F59H68T5Y",
            "timestamp": 1494018146,
            "name": "sea_cucumber.png",
            "title": "sea_cucumber.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F59H68T5Y/sea_cucumber.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F59H68T5Y/download/sea_cucumber.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F59H68T5Y-7f51b95321/sea_cucumber_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F59H68T5Y-7f51b95321/sea_cucumber_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F59H68T5Y-7f51b95321/sea_cucumber_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F59H68T5Y-7f51b95321/sea_cucumber_720.png",
            "original_w": 745,
            "original_h": 408,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F59H68T5Y/sea_cucumber.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "tropical_fish",
                    "users": [
                        "U2DU3TZL7",
                        "U1000HJ8H",
                        "U1324MZRS"
                    ],
                    "count": 3
                },
                {
                    "name": "wave",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5ABV4CB1",
            "timestamp": 1494018136,
            "name": "870386",
            "title": "Mickey",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5ABV4CB1/870386",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5ABV4CB1/download/870386",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5ABV4CB1-364d3e0b4b/870386_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5ABV4CB1-364d3e0b4b/870386_160.png",
            "original_w": 415,
            "original_h": 230,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F5ABV4CB1/870386",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "question",
                    "users": [
                        "U1324MZRS",
                        "U2A6BJ71Q",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "mouse",
                    "users": [
                        "U2PKVNC87",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5ABANNG6",
            "timestamp": 1494018111,
            "name": "Screen Shot 2017-05-05 at 3.01.39 PM.png",
            "title": "Screen Shot 2017-05-05 at 3.01.39 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5ABANNG6/screen_shot_2017-05-05_at_3.01.39_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5ABANNG6/download/screen_shot_2017-05-05_at_3.01.39_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5ABANNG6-dcd58ba82c/screen_shot_2017-05-05_at_3.01.39_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5ABANNG6-dcd58ba82c/screen_shot_2017-05-05_at_3.01.39_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5ABANNG6-dcd58ba82c/screen_shot_2017-05-05_at_3.01.39_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5ABANNG6-dcd58ba82c/screen_shot_2017-05-05_at_3.01.39_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5ABANNG6-dcd58ba82c/screen_shot_2017-05-05_at_3.01.39_pm_1024.png",
            "original_w": 1058,
            "original_h": 625,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F5ABANNG6/screen_shot_2017-05-05_at_3.01.39_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart_eyes",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F59JM1TFW",
            "timestamp": 1494018110,
            "name": "Pasted image at 2017_05_05 03_01 PM.png",
            "title": "Pasted image at 2017-05-05, 3:01 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F59JM1TFW/pasted_image_at_2017_05_05_03_01_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F59JM1TFW/download/pasted_image_at_2017_05_05_03_01_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F59JM1TFW-fb96f04804/pasted_image_at_2017_05_05_03_01_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F59JM1TFW-fb96f04804/pasted_image_at_2017_05_05_03_01_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F59JM1TFW-fb96f04804/pasted_image_at_2017_05_05_03_01_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F59JM1TFW-fb96f04804/pasted_image_at_2017_05_05_03_01_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F59JM1TFW-fb96f04804/pasted_image_at_2017_05_05_03_01_pm_1024.png",
            "original_w": 1121,
            "original_h": 575,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F59JM1TFW/pasted_image_at_2017_05_05_03_01_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "cookie",
                    "users": [
                        "U2PKVNC87",
                        "U0ZV9NY93",
                        "U1324MZRS",
                        "U0N226FV4"
                    ],
                    "count": 4
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F5ABAEHL6",
            "timestamp": 1494018085,
            "name": "Screen Shot 2017-05-05 at 3.01.14 PM.png",
            "title": "Screen Shot 2017-05-05 at 3.01.14 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5ABAEHL6/screen_shot_2017-05-05_at_3.01.14_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5ABAEHL6/download/screen_shot_2017-05-05_at_3.01.14_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5ABAEHL6-4b193e4005/screen_shot_2017-05-05_at_3.01.14_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5ABAEHL6-4b193e4005/screen_shot_2017-05-05_at_3.01.14_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5ABAEHL6-4b193e4005/screen_shot_2017-05-05_at_3.01.14_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5ABAEHL6-4b193e4005/screen_shot_2017-05-05_at_3.01.14_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5ABAEHL6-4b193e4005/screen_shot_2017-05-05_at_3.01.14_pm_1024.png",
            "original_w": 1332,
            "original_h": 676,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F5ABAEHL6/screen_shot_2017-05-05_at_3.01.14_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "horse",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F5ABQGR7H",
            "timestamp": 1494017610,
            "name": "Captura_de_pantalla_2012-03-17_a_la_s__22.14.48.png",
            "title": "Animal",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5ABQGR7H/captura_de_pantalla_2012-03-17_a_la_s__22.14.48.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5ABQGR7H/download/captura_de_pantalla_2012-03-17_a_la_s__22.14.48.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5ABQGR7H-8388b5e00c/captura_de_pantalla_2012-03-17_a_la_s__22.14.48_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5ABQGR7H-8388b5e00c/captura_de_pantalla_2012-03-17_a_la_s__22.14.48_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5ABQGR7H-8388b5e00c/captura_de_pantalla_2012-03-17_a_la_s__22.14.48_160.png",
            "original_w": 381,
            "original_h": 500,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F5ABQGR7H/captura_de_pantalla_2012-03-17_a_la_s__22.14.48.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc59EWPYV9",
                "timestamp": 1494017610,
                "user": "U2PKVNC87",
                "is_intro": true,
                "comment": "<@U0J6ZJTDM> how about this animal?"
            }
        },
        {
            "id": "F569DBWCT",
            "timestamp": 1493414167,
            "name": "Pasted image at 2017_04_28 03_16 PM.png",
            "title": "Pasted image at 2017-04-28, 3:16 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F569DBWCT/pasted_image_at_2017_04_28_03_16_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F569DBWCT/download/pasted_image_at_2017_04_28_03_16_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F569DBWCT-16f68c27fe/pasted_image_at_2017_04_28_03_16_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F569DBWCT-16f68c27fe/pasted_image_at_2017_04_28_03_16_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F569DBWCT-16f68c27fe/pasted_image_at_2017_04_28_03_16_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F569DBWCT-16f68c27fe/pasted_image_at_2017_04_28_03_16_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F569DBWCT-16f68c27fe/pasted_image_at_2017_04_28_03_16_pm_1024.png",
            "original_w": 1116,
            "original_h": 1101,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F569DBWCT/pasted_image_at_2017_04_28_03_16_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trollface",
                    "users": [
                        "U2CL304CW",
                        "U1000HJ8H"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F56CTHB36",
            "timestamp": 1493413503,
            "name": "Pasted image at 2017_04_28 03_04 PM.png",
            "title": "paint me like one of your french bugs",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F56CTHB36/pasted_image_at_2017_04_28_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F56CTHB36/download/pasted_image_at_2017_04_28_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F56CTHB36-1e6f4c1696/pasted_image_at_2017_04_28_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F56CTHB36-1e6f4c1696/pasted_image_at_2017_04_28_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F56CTHB36-1e6f4c1696/pasted_image_at_2017_04_28_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F56CTHB36-1e6f4c1696/pasted_image_at_2017_04_28_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F56CTHB36-1e6f4c1696/pasted_image_at_2017_04_28_03_04_pm_1024.png",
            "original_w": 1471,
            "original_h": 521,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F56CTHB36/pasted_image_at_2017_04_28_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "lips",
                    "users": [
                        "U2JR1RSDA",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "flag-fr",
                    "users": [
                        "U29PKD0NN",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "joy",
                    "users": [
                        "U2J6FK5CZ",
                        "U2G4XKRRU",
                        "U2PKVNC87",
                        "U13FJA80G",
                        "U2A6A9FR8"
                    ],
                    "count": 5
                },
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "ship",
                    "users": [
                        "U2G4XKRRU",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "gem",
                    "users": [
                        "U2PKVNC87"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F57612V39",
            "timestamp": 1493413477,
            "name": "Pasted image at 2017_04_28 03_04 PM.png",
            "title": "Pasted image at 2017-04-28, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F57612V39/pasted_image_at_2017_04_28_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F57612V39/download/pasted_image_at_2017_04_28_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F57612V39-6a042ad5cb/pasted_image_at_2017_04_28_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F57612V39-6a042ad5cb/pasted_image_at_2017_04_28_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F57612V39-6a042ad5cb/pasted_image_at_2017_04_28_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F57612V39-6a042ad5cb/pasted_image_at_2017_04_28_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F57612V39-6a042ad5cb/pasted_image_at_2017_04_28_03_04_pm_1024.png",
            "original_w": 1080,
            "original_h": 1576,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F57612V39/pasted_image_at_2017_04_28_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "dog",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F56BCPHC2",
            "timestamp": 1493413463,
            "name": "Pasted image at 2017_04_28 03_04 PM.png",
            "title": "How many are there?",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F56BCPHC2/pasted_image_at_2017_04_28_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F56BCPHC2/download/pasted_image_at_2017_04_28_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F56BCPHC2-2e13472224/pasted_image_at_2017_04_28_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F56BCPHC2-2e13472224/pasted_image_at_2017_04_28_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F56BCPHC2-2e13472224/pasted_image_at_2017_04_28_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F56BCPHC2-2e13472224/pasted_image_at_2017_04_28_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F56BCPHC2-2e13472224/pasted_image_at_2017_04_28_03_04_pm_1024.png",
            "original_w": 1455,
            "original_h": 862,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F56BCPHC2/pasted_image_at_2017_04_28_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "thinking_face",
                    "users": [
                        "U0N226FV4",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "monkeydance",
                    "users": [
                        "U0B52QL07"
                    ],
                    "count": 1
                },
                {
                    "name": "beers",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F56BCMC7L",
            "timestamp": 1493413450,
            "name": "Drawing (2).jpeg",
            "title": "Drawing (2).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0B52QL07",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F56BCMC7L/drawing__2_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F56BCMC7L/download/drawing__2_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F56BCMC7L-5afa36787e/drawing__2__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F56BCMC7L-5afa36787e/drawing__2__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F56BCMC7L-5afa36787e/drawing__2__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F56BCMC7L-5afa36787e/drawing__2__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F56BCMC7L-5afa36787e/drawing__2__1024.jpg",
            "original_w": 1215,
            "original_h": 700,
            "permalink": "https://appdirect.slack.com/files/aneet.sachdeva/F56BCMC7L/drawing__2_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart_eyes",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "tanabata_tree",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F55M3UCHE",
            "timestamp": 1493413440,
            "name": "Pasted image at 2017_04_28 03_03 PM.png",
            "title": "Pasted image at 2017-04-28, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F55M3UCHE/pasted_image_at_2017_04_28_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F55M3UCHE/download/pasted_image_at_2017_04_28_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F55M3UCHE-3013542c37/pasted_image_at_2017_04_28_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F55M3UCHE-3013542c37/pasted_image_at_2017_04_28_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F55M3UCHE-3013542c37/pasted_image_at_2017_04_28_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F55M3UCHE-3013542c37/pasted_image_at_2017_04_28_03_03_pm_720.png",
            "original_w": 937,
            "original_h": 510,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F55M3UCHE/pasted_image_at_2017_04_28_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "open_mouth",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "point_up",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F575ND4B0",
            "timestamp": 1493413426,
            "name": "Pasted image at 2017_04_28 03_03 PM.png",
            "title": "Pasted image at 2017-04-28, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F575ND4B0/pasted_image_at_2017_04_28_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F575ND4B0/download/pasted_image_at_2017_04_28_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F575ND4B0-e6b753bcb2/pasted_image_at_2017_04_28_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F575ND4B0-e6b753bcb2/pasted_image_at_2017_04_28_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F575ND4B0-e6b753bcb2/pasted_image_at_2017_04_28_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F575ND4B0-e6b753bcb2/pasted_image_at_2017_04_28_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F575ND4B0-e6b753bcb2/pasted_image_at_2017_04_28_03_03_pm_1024.png",
            "original_w": 1080,
            "original_h": 1726,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F575ND4B0/pasted_image_at_2017_04_28_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ghost",
                    "users": [
                        "U0J6ZJTDM"
                    ],
                    "count": 1
                },
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "x",
                    "users": [
                        "U2G1VV7AR",
                        "U2QUK00RK",
                        "U08P10WPQ"
                    ],
                    "count": 3
                },
                {
                    "name": "-1",
                    "users": [
                        "U2QUK00RK"
                    ],
                    "count": 1
                },
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "hankey",
                    "users": [
                        "U2QUK00RK"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F56CSPWR2",
            "timestamp": 1493413415,
            "name": "Drawing (2).png",
            "title": "Drawing (2).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F56CSPWR2/drawing__2_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F56CSPWR2/download/drawing__2_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F56CSPWR2-272ade55cc/drawing__2__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F56CSPWR2-272ade55cc/drawing__2__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F56CSPWR2-272ade55cc/drawing__2__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F56CSPWR2-272ade55cc/drawing__2__720.png",
            "original_w": 990,
            "original_h": 782,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F56CSPWR2/drawing__2_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "gun",
                    "users": [
                        "U2D7F59RU",
                        "U13FJA80G",
                        "U2G4XKRRU",
                        "U2A658R7U",
                        "U2DU3TZL7"
                    ],
                    "count": 5
                }
            ]
        },
        {
            "id": "F56BC9EM8",
            "timestamp": 1493413406,
            "name": "Pasted image at 2017_04_28 03_03 PM.png",
            "title": "very convincing?",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F56BC9EM8/pasted_image_at_2017_04_28_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F56BC9EM8/download/pasted_image_at_2017_04_28_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F56BC9EM8-22c2150dd8/pasted_image_at_2017_04_28_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F56BC9EM8-22c2150dd8/pasted_image_at_2017_04_28_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F56BC9EM8-22c2150dd8/pasted_image_at_2017_04_28_03_03_pm_160.png",
            "original_w": 572,
            "original_h": 405,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F56BC9EM8/pasted_image_at_2017_04_28_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "thinking_face",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "tanabata_tree",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F575N4EB0",
            "timestamp": 1493413399,
            "name": "Drawing (2).png",
            "title": "Drawing (2).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F575N4EB0/drawing__2_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F575N4EB0/download/drawing__2_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F575N4EB0-9141a57bf1/drawing__2__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F575N4EB0-9141a57bf1/drawing__2__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F575N4EB0-9141a57bf1/drawing__2__160.png",
            "original_w": 497,
            "original_h": 602,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F575N4EB0/drawing__2_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F56975ZQB",
            "timestamp": 1493413395,
            "name": "Screen Shot 2017-04-28 at 3.02.42 PM.png",
            "title": "StickUp.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F56975ZQB/screen_shot_2017-04-28_at_3.02.42_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F56975ZQB/download/screen_shot_2017-04-28_at_3.02.42_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F56975ZQB-14f14e335d/screen_shot_2017-04-28_at_3.02.42_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F56975ZQB-14f14e335d/screen_shot_2017-04-28_at_3.02.42_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F56975ZQB-14f14e335d/screen_shot_2017-04-28_at_3.02.42_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F56975ZQB-14f14e335d/screen_shot_2017-04-28_at_3.02.42_pm_720.png",
            "original_w": 453,
            "original_h": 831,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F56975ZQB/screen_shot_2017-04-28_at_3.02.42_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart_eyes",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "eyes",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F569754UB",
            "timestamp": 1493413390,
            "name": "Screen Shot 2017-04-28 at 3.02.26 PM.png",
            "title": "stick bug",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2ANFV42J",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F569754UB/screen_shot_2017-04-28_at_3.02.26_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F569754UB/download/screen_shot_2017-04-28_at_3.02.26_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F569754UB-cf4dc023a3/screen_shot_2017-04-28_at_3.02.26_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F569754UB-cf4dc023a3/screen_shot_2017-04-28_at_3.02.26_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F569754UB-cf4dc023a3/screen_shot_2017-04-28_at_3.02.26_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F569754UB-cf4dc023a3/screen_shot_2017-04-28_at_3.02.26_pm_720.png",
            "original_w": 742,
            "original_h": 437,
            "permalink": "https://appdirect.slack.com/files/josemary.daniel/F569754UB/screen_shot_2017-04-28_at_3.02.26_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "eyes",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "+1",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5760AM63",
            "timestamp": 1493413387,
            "name": "Drawing (8).jpeg",
            "title": "Drawing (8).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5760AM63/drawing__8_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5760AM63/download/drawing__8_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5760AM63-8f6ac38d55/drawing__8__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5760AM63-8f6ac38d55/drawing__8__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5760AM63-8f6ac38d55/drawing__8__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5760AM63-8f6ac38d55/drawing__8__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5760AM63-8f6ac38d55/drawing__8__1024.jpg",
            "original_w": 1141,
            "original_h": 588,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F5760AM63/drawing__8_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G",
                        "U2CL304CW",
                        "U2ANFV42J"
                    ],
                    "count": 3
                },
                {
                    "name": "robot_face",
                    "users": [
                        "U2G4XKRRU"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F575MUGT0",
            "timestamp": 1493413370,
            "name": "Screen Shot 2017-04-28 at 3.02.31 PM.png",
            "title": "Screen Shot 2017-04-28 at 3.02.31 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F575MUGT0/screen_shot_2017-04-28_at_3.02.31_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F575MUGT0/download/screen_shot_2017-04-28_at_3.02.31_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F575MUGT0-2dbbca6f31/screen_shot_2017-04-28_at_3.02.31_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F575MUGT0-2dbbca6f31/screen_shot_2017-04-28_at_3.02.31_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F575MUGT0-2dbbca6f31/screen_shot_2017-04-28_at_3.02.31_pm_160.png",
            "original_w": 699,
            "original_h": 651,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F575MUGT0/screen_shot_2017-04-28_at_3.02.31_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "school_satchel",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F55Q1GU81",
            "timestamp": 1493413363,
            "name": "Screen Shot 2017-04-28 at 14.02.28.png",
            "title": "Screen Shot 2017-04-28 at 14.02.28.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0J6ZJTDM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F55Q1GU81/screen_shot_2017-04-28_at_14.02.28.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F55Q1GU81/download/screen_shot_2017-04-28_at_14.02.28.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F55Q1GU81-dd073fcbcc/screen_shot_2017-04-28_at_14.02.28_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F55Q1GU81-dd073fcbcc/screen_shot_2017-04-28_at_14.02.28_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F55Q1GU81-dd073fcbcc/screen_shot_2017-04-28_at_14.02.28_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F55Q1GU81-dd073fcbcc/screen_shot_2017-04-28_at_14.02.28_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F55Q1GU81-dd073fcbcc/screen_shot_2017-04-28_at_14.02.28_1024.png",
            "original_w": 1102,
            "original_h": 716,
            "permalink": "https://appdirect.slack.com/files/arjun.krishna/F55Q1GU81/screen_shot_2017-04-28_at_14.02.28.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "point_up",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "slightly_smiling_face",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F56BBRGRG",
            "timestamp": 1493413353,
            "name": "stick bug.png",
            "title": "stick bug.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U3L6JARDE",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F56BBRGRG/stick_bug.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F56BBRGRG/download/stick_bug.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F56BBRGRG-c122a65ab0/stick_bug_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F56BBRGRG-c122a65ab0/stick_bug_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F56BBRGRG-c122a65ab0/stick_bug_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F56BBRGRG-c122a65ab0/stick_bug_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F56BBRGRG-c122a65ab0/stick_bug_1024.png",
            "original_w": 1136,
            "original_h": 684,
            "permalink": "https://appdirect.slack.com/files/asmi.joshi/F56BBRGRG/stick_bug.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "flushed",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "anguished",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "metal",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5696PGTV",
            "timestamp": 1493413351,
            "name": "Pasted image at 2017_04_28 03_02 PM.png",
            "title": "Le Stick Bug",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5696PGTV/pasted_image_at_2017_04_28_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5696PGTV/download/pasted_image_at_2017_04_28_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5696PGTV-2506cd68cb/pasted_image_at_2017_04_28_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5696PGTV-2506cd68cb/pasted_image_at_2017_04_28_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5696PGTV-2506cd68cb/pasted_image_at_2017_04_28_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5696PGTV-2506cd68cb/pasted_image_at_2017_04_28_03_02_pm_720.png",
            "original_w": 870,
            "original_h": 359,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F5696PGTV/pasted_image_at_2017_04_28_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U2CL304CW",
                        "U27DJ3JT0",
                        "U0N226FV4",
                        "U2PKLJ160",
                        "U2D7F59RU",
                        "U2G4XKRRU",
                        "U2DU3TZL7",
                        "U1000HJ8H",
                        "U47UK2SN6"
                    ],
                    "count": 9
                },
                {
                    "name": "heart",
                    "users": [
                        "U13FJA80G",
                        "U0B52QL07"
                    ],
                    "count": 2
                },
                {
                    "name": "tada",
                    "users": [
                        "U2DU3TZL7",
                        "U2PKVNC87"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F55Q1B6F3",
            "timestamp": 1493413338,
            "name": "Pasted image at 2017_04_28 03_02 PM.png",
            "title": "Pasted image at 2017-04-28, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F55Q1B6F3/pasted_image_at_2017_04_28_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F55Q1B6F3/download/pasted_image_at_2017_04_28_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F55Q1B6F3-df6593f127/pasted_image_at_2017_04_28_03_02_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F55Q1B6F3-df6593f127/pasted_image_at_2017_04_28_03_02_pm_160.png",
            "original_w": 396,
            "original_h": 120,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F55Q1B6F3/pasted_image_at_2017_04_28_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U1324MZRS",
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "hotdog",
                    "users": [
                        "U2G1VV7AR",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F5696KAP5",
            "timestamp": 1493413328,
            "name": "Drawing (3).png",
            "title": "Drawing (3).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2J48K6QY",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5696KAP5/drawing__3_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5696KAP5/download/drawing__3_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5696KAP5-948e1269b9/drawing__3__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F5696KAP5-948e1269b9/drawing__3__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5696KAP5-948e1269b9/drawing__3__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F5696KAP5-948e1269b9/drawing__3__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F5696KAP5-948e1269b9/drawing__3__1024.png",
            "original_w": 1593,
            "original_h": 757,
            "permalink": "https://appdirect.slack.com/files/mike.mahpoy/F5696KAP5/drawing__3_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 2,
            "initial_comment": {
                "id": "Fc56BBNWG2",
                "timestamp": 1493413328,
                "user": "U2J48K6QY",
                "is_intro": true,
                "comment": "\u2026I got a shot \u2026"
            },
            "reactions": [
                {
                    "name": "hankey",
                    "users": [
                        "U1324MZRS",
                        "U2G4XKRRU",
                        "U2DU3TZL7",
                        "U1000HJ8H",
                        "U08P10WPQ"
                    ],
                    "count": 5
                },
                {
                    "name": "one",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F56CS25NG",
            "timestamp": 1493413318,
            "name": "Screen Shot 2017-04-28 at 3.01.33 PM.png",
            "title": "bug.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U47UK2SN6",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F56CS25NG/screen_shot_2017-04-28_at_3.01.33_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F56CS25NG/download/screen_shot_2017-04-28_at_3.01.33_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F56CS25NG-e6be5a1f16/screen_shot_2017-04-28_at_3.01.33_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F56CS25NG-e6be5a1f16/screen_shot_2017-04-28_at_3.01.33_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F56CS25NG-e6be5a1f16/screen_shot_2017-04-28_at_3.01.33_pm_160.png",
            "original_w": 638,
            "original_h": 416,
            "permalink": "https://appdirect.slack.com/files/brenna.devlin/F56CS25NG/screen_shot_2017-04-28_at_3.01.33_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "bug",
                    "users": [
                        "U1324MZRS",
                        "U2D7F59RU",
                        "U2G4XKRRU",
                        "U1000HJ8H",
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 6
                },
                {
                    "name": "slightly_smiling_face",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F5696B3V1",
            "timestamp": 1493413303,
            "name": "Pasted image at 2017_04_28 03_01 PM.png",
            "title": "Pasted image at 2017-04-28, 3:01 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F5696B3V1/pasted_image_at_2017_04_28_03_01_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F5696B3V1/download/pasted_image_at_2017_04_28_03_01_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F5696B3V1-b63748520d/pasted_image_at_2017_04_28_03_01_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F5696B3V1-b63748520d/pasted_image_at_2017_04_28_03_01_pm_160.png",
            "original_w": 263,
            "original_h": 435,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F5696B3V1/pasted_image_at_2017_04_28_03_01_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "slightly_smiling_face",
                    "users": [
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F56CRMB36",
            "timestamp": 1493413282,
            "name": "Screen Shot 2017-04-28 at 3.01.07 PM.png",
            "title": "Screen Shot 2017-04-28 at 3.01.07 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F56CRMB36/screen_shot_2017-04-28_at_3.01.07_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F56CRMB36/download/screen_shot_2017-04-28_at_3.01.07_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F56CRMB36-64d9a97800/screen_shot_2017-04-28_at_3.01.07_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F56CRMB36-64d9a97800/screen_shot_2017-04-28_at_3.01.07_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F56CRMB36-64d9a97800/screen_shot_2017-04-28_at_3.01.07_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F56CRMB36-64d9a97800/screen_shot_2017-04-28_at_3.01.07_pm_720.png",
            "original_w": 895,
            "original_h": 659,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F56CRMB36/screen_shot_2017-04-28_at_3.01.07_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "sweat_drops",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F527G22GG",
            "timestamp": 1492808760,
            "name": "Pasted image at 2017_04_21 03_05 PM.png",
            "title": "Pasted image at 2017-04-21, 3:05 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F527G22GG/pasted_image_at_2017_04_21_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F527G22GG/download/pasted_image_at_2017_04_21_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F527G22GG-81fbdacc61/pasted_image_at_2017_04_21_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F527G22GG-81fbdacc61/pasted_image_at_2017_04_21_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F527G22GG-81fbdacc61/pasted_image_at_2017_04_21_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F527G22GG-81fbdacc61/pasted_image_at_2017_04_21_03_05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F527G22GG-81fbdacc61/pasted_image_at_2017_04_21_03_05_pm_1024.png",
            "original_w": 948,
            "original_h": 1516,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F527G22GG/pasted_image_at_2017_04_21_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW",
                        "U47SKS1D2"
                    ],
                    "count": 2
                },
                {
                    "name": "facepalm",
                    "users": [
                        "U0ZV27VBQ",
                        "U2A6BJ71Q"
                    ],
                    "count": 2
                },
                {
                    "name": "no_entry_sign",
                    "users": [
                        "U2G1VV7AR",
                        "U21BYUQ1Z",
                        "U2ASS8TEH",
                        "U2J6FK5CZ"
                    ],
                    "count": 4
                },
                {
                    "name": "fist",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "onepiece",
                    "users": [
                        "U0ANK8V43",
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "timer_clock",
                    "users": [
                        "U1000HJ8H"
                    ],
                    "count": 1
                },
                {
                    "name": "writing_hand",
                    "users": [
                        "U2B523PT9"
                    ],
                    "count": 1
                },
                {
                    "name": "-1::skin-tone-2",
                    "users": [
                        "U2J6FK5CZ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F53MD9ZHU",
            "timestamp": 1492808658,
            "name": "Pasted image at 2017_04_21 03_04 PM.png",
            "title": "Pasted image at 2017-04-21, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F53MD9ZHU/pasted_image_at_2017_04_21_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F53MD9ZHU/download/pasted_image_at_2017_04_21_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F53MD9ZHU-d7918eb644/pasted_image_at_2017_04_21_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F53MD9ZHU-d7918eb644/pasted_image_at_2017_04_21_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F53MD9ZHU-d7918eb644/pasted_image_at_2017_04_21_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F53MD9ZHU-d7918eb644/pasted_image_at_2017_04_21_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F53MD9ZHU-d7918eb644/pasted_image_at_2017_04_21_03_04_pm_1024.png",
            "original_w": 1455,
            "original_h": 933,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F53MD9ZHU/pasted_image_at_2017_04_21_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G",
                        "U47SKS1D2"
                    ],
                    "count": 2
                },
                {
                    "name": "tangerine",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F52QZ8H27",
            "timestamp": 1492808657,
            "name": "Pasted image at 2017_04_21 03_04 PM.png",
            "title": "Pasted image at 2017-04-21, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F52QZ8H27/pasted_image_at_2017_04_21_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F52QZ8H27/download/pasted_image_at_2017_04_21_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F52QZ8H27-89bacf74c1/pasted_image_at_2017_04_21_03_04_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F52QZ8H27-89bacf74c1/pasted_image_at_2017_04_21_03_04_pm_160.png",
            "original_w": 358,
            "original_h": 329,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F52QZ8H27/pasted_image_at_2017_04_21_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "cry",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "scream_cat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F52T47FRQ",
            "timestamp": 1492808656,
            "name": "Screen Shot 2017-04-21 at 3.03.46 PM.png",
            "title": "Twas a sunny day in paradise",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F52T47FRQ/screen_shot_2017-04-21_at_3.03.46_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F52T47FRQ/download/screen_shot_2017-04-21_at_3.03.46_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F52T47FRQ-d6e396dffc/screen_shot_2017-04-21_at_3.03.46_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F52T47FRQ-d6e396dffc/screen_shot_2017-04-21_at_3.03.46_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F52T47FRQ-d6e396dffc/screen_shot_2017-04-21_at_3.03.46_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F52T47FRQ-d6e396dffc/screen_shot_2017-04-21_at_3.03.46_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F52T47FRQ-d6e396dffc/screen_shot_2017-04-21_at_3.03.46_pm_1024.png",
            "original_w": 1423,
            "original_h": 753,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F52T47FRQ/screen_shot_2017-04-21_at_3.03.46_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "tada",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "sunny",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "ok_hand::skin-tone-2",
                    "users": [
                        "U47SKS1D2"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F53MRSRAB",
            "timestamp": 1492808649,
            "name": "Screen Shot 2017-04-21 at 3.03.56 PM.png",
            "title": "Screen Shot 2017-04-21 at 3.03.56 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F53MRSRAB/screen_shot_2017-04-21_at_3.03.56_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F53MRSRAB/download/screen_shot_2017-04-21_at_3.03.56_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F53MRSRAB-c2e2d5fcdb/screen_shot_2017-04-21_at_3.03.56_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F53MRSRAB-c2e2d5fcdb/screen_shot_2017-04-21_at_3.03.56_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F53MRSRAB-c2e2d5fcdb/screen_shot_2017-04-21_at_3.03.56_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F53MRSRAB-c2e2d5fcdb/screen_shot_2017-04-21_at_3.03.56_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F53MRSRAB-c2e2d5fcdb/screen_shot_2017-04-21_at_3.03.56_pm_1024.png",
            "original_w": 2574,
            "original_h": 1514,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F53MRSRAB/screen_shot_2017-04-21_at_3.03.56_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "point_up",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "hammer",
                    "users": [
                        "U08P10WPQ",
                        "U47SKS1D2"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F527F1E48",
            "timestamp": 1492808636,
            "name": "Drawing (1).jpeg",
            "title": "Drawing (1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0B52QL07",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F527F1E48/drawing__1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F527F1E48/download/drawing__1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F527F1E48-d6d7df0c3c/drawing__1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F527F1E48-d6d7df0c3c/drawing__1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F527F1E48-d6d7df0c3c/drawing__1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F527F1E48-d6d7df0c3c/drawing__1__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F527F1E48-d6d7df0c3c/drawing__1__1024.jpg",
            "original_w": 1215,
            "original_h": 700,
            "permalink": "https://appdirect.slack.com/files/aneet.sachdeva/F527F1E48/drawing__1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart_eyes",
                    "users": [
                        "U13FJA80G",
                        "U47SKS1D2"
                    ],
                    "count": 2
                },
                {
                    "name": "princess",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F530DF9JR",
            "timestamp": 1492808633,
            "name": "Pasted image at 2017_04_21 03_03 PM.png",
            "title": "Pasted image at 2017-04-21, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F530DF9JR/pasted_image_at_2017_04_21_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F530DF9JR/download/pasted_image_at_2017_04_21_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F530DF9JR-0f39596bf8/pasted_image_at_2017_04_21_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F530DF9JR-0f39596bf8/pasted_image_at_2017_04_21_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F530DF9JR-0f39596bf8/pasted_image_at_2017_04_21_03_03_pm_160.png",
            "original_w": 693,
            "original_h": 566,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F530DF9JR/pasted_image_at_2017_04_21_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "first_quarter_moon_with_face",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "ok_hand::skin-tone-2",
                    "users": [
                        "U47SKS1D2"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F53MRNH7Z",
            "timestamp": 1492808629,
            "name": "Screen Shot 2017-04-21 at 3.03.29 PM.png",
            "title": "Screen Shot 2017-04-21 at 3.03.29 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F53MRNH7Z/screen_shot_2017-04-21_at_3.03.29_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F53MRNH7Z/download/screen_shot_2017-04-21_at_3.03.29_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F53MRNH7Z-194ddcaa60/screen_shot_2017-04-21_at_3.03.29_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F53MRNH7Z-194ddcaa60/screen_shot_2017-04-21_at_3.03.29_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F53MRNH7Z-194ddcaa60/screen_shot_2017-04-21_at_3.03.29_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F53MRNH7Z-194ddcaa60/screen_shot_2017-04-21_at_3.03.29_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F53MRNH7Z-194ddcaa60/screen_shot_2017-04-21_at_3.03.29_pm_1024.png",
            "original_w": 2018,
            "original_h": 1410,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F53MRNH7Z/screen_shot_2017-04-21_at_3.03.29_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "stuck_out_tongue_winking_eye",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7",
                        "U47SKS1D2"
                    ],
                    "count": 3
                },
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F530DBWSZ",
            "timestamp": 1492808614,
            "name": "Screen Shot 2017-04-21 at 3.03.20 PM.png",
            "title": "Screen Shot 2017-04-21 at 3.03.20 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F530DBWSZ/screen_shot_2017-04-21_at_3.03.20_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F530DBWSZ/download/screen_shot_2017-04-21_at_3.03.20_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F530DBWSZ-671054a649/screen_shot_2017-04-21_at_3.03.20_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F530DBWSZ-671054a649/screen_shot_2017-04-21_at_3.03.20_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F530DBWSZ-671054a649/screen_shot_2017-04-21_at_3.03.20_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F530DBWSZ-671054a649/screen_shot_2017-04-21_at_3.03.20_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F530DBWSZ-671054a649/screen_shot_2017-04-21_at_3.03.20_pm_1024.png",
            "original_w": 1140,
            "original_h": 1080,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F530DBWSZ/screen_shot_2017-04-21_at_3.03.20_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "notbad",
                    "users": [
                        "U29PKD0NN",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "feet",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "smiley_cat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "heart",
                    "users": [
                        "U13FJA80G",
                        "U47SKS1D2"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F52UHGF1A",
            "timestamp": 1492808602,
            "name": "Screen Shot 2017-04-21 at 3.03.05 PM.png",
            "title": "Screen Shot 2017-04-21 at 3.03.05 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F52UHGF1A/screen_shot_2017-04-21_at_3.03.05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F52UHGF1A/download/screen_shot_2017-04-21_at_3.03.05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F52UHGF1A-100f97d25f/screen_shot_2017-04-21_at_3.03.05_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F52UHGF1A-100f97d25f/screen_shot_2017-04-21_at_3.03.05_pm_160.png",
            "original_w": 335,
            "original_h": 439,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F52UHGF1A/screen_shot_2017-04-21_at_3.03.05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2D7F59RU",
                        "U2A6BJ71Q",
                        "U1000HJ8H",
                        "U2DU3TZL7",
                        "U47SKS1D2"
                    ],
                    "count": 5
                },
                {
                    "name": "basketball",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "football",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G",
                        "U3ATVB16Y"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F52QYQ68K",
            "timestamp": 1492808600,
            "name": "Pasted image at 2017_04_21 03_03 PM.png",
            "title": "Dirty Hedwig",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2D7F59RU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F52QYQ68K/pasted_image_at_2017_04_21_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F52QYQ68K/download/pasted_image_at_2017_04_21_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F52QYQ68K-13efdea1dc/pasted_image_at_2017_04_21_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F52QYQ68K-13efdea1dc/pasted_image_at_2017_04_21_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F52QYQ68K-13efdea1dc/pasted_image_at_2017_04_21_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F52QYQ68K-13efdea1dc/pasted_image_at_2017_04_21_03_03_pm_720.png",
            "original_w": 759,
            "original_h": 406,
            "permalink": "https://appdirect.slack.com/files/george.dimitrov/F52QYQ68K/pasted_image_at_2017_04_21_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U2CL304CW",
                        "U0ZV9NY93",
                        "U13GTGD7G",
                        "U1000HJ8H",
                        "U2A6BJ71Q",
                        "U21BYUQ1Z",
                        "U27DJ3JT0",
                        "U13FJA80G"
                    ],
                    "count": 8
                },
                {
                    "name": "ant",
                    "users": [
                        "U0ZV9NY93",
                        "U21BYUQ1Z"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U21BYUQ1Z",
                        "U27DJ3JT0"
                    ],
                    "count": 2
                },
                {
                    "name": "pizza",
                    "users": [
                        "U21BYUQ1Z"
                    ],
                    "count": 1
                },
                {
                    "name": "mouse",
                    "users": [
                        "U21BYUQ1Z"
                    ],
                    "count": 1
                },
                {
                    "name": "bat",
                    "users": [
                        "U1000HJ8H",
                        "U08P10WPQ",
                        "U0B52QL07",
                        "U2DU3TZL7",
                        "U47SKS1D2"
                    ],
                    "count": 5
                },
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F52ACR1UH",
            "timestamp": 1492808597,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F52ACR1UH/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F52ACR1UH/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F52ACR1UH-24b31fa917/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F52ACR1UH-24b31fa917/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F52ACR1UH-24b31fa917/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F52ACR1UH-24b31fa917/drawing_720.png",
            "original_w": 721,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F52ACR1UH/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "eyes",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "ok_hand::skin-tone-2",
                    "users": [
                        "U47SKS1D2"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F530D5VK7",
            "timestamp": 1492808593,
            "name": "Drawing (1).png",
            "title": "Drawing (1).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F530D5VK7/drawing__1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F530D5VK7/download/drawing__1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F530D5VK7-66c796c8f6/drawing__1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F530D5VK7-66c796c8f6/drawing__1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F530D5VK7-66c796c8f6/drawing__1__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F530D5VK7-66c796c8f6/drawing__1__720.png",
            "original_w": 990,
            "original_h": 782,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F530D5VK7/drawing__1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "jeans",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "eyes",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F52QYHUE7",
            "timestamp": 1492808586,
            "name": "Pasted image at 2017_04_21 03_03 PM.png",
            "title": "Pasted image at 2017-04-21, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F52QYHUE7/pasted_image_at_2017_04_21_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F52QYHUE7/download/pasted_image_at_2017_04_21_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F52QYHUE7-bde21d3bac/pasted_image_at_2017_04_21_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F52QYHUE7-bde21d3bac/pasted_image_at_2017_04_21_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F52QYHUE7-bde21d3bac/pasted_image_at_2017_04_21_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F52QYHUE7-bde21d3bac/pasted_image_at_2017_04_21_03_03_pm_720.png",
            "original_w": 798,
            "original_h": 840,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F52QYHUE7/pasted_image_at_2017_04_21_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "eyes",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F53MR8Q07",
            "timestamp": 1492808573,
            "name": "Drawing(1).jpeg",
            "title": "Drawing(1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F53MR8Q07/drawing_1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F53MR8Q07/download/drawing_1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F53MR8Q07-3599993e24/drawing_1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F53MR8Q07-3599993e24/drawing_1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F53MR8Q07-3599993e24/drawing_1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F53MR8Q07-3599993e24/drawing_1__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F53MR8Q07-3599993e24/drawing_1__1024.jpg",
            "original_w": 1141,
            "original_h": 590,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F53MR8Q07/drawing_1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "bowling",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "one",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "ok_hand::skin-tone-2",
                    "users": [
                        "U47SKS1D2"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F527EDGRW",
            "timestamp": 1492808561,
            "name": "Pasted image at 2017_04_21 03_02 PM.png",
            "title": "WHOOOOOO?",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F527EDGRW/pasted_image_at_2017_04_21_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F527EDGRW/download/pasted_image_at_2017_04_21_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F527EDGRW-c727fba9b1/pasted_image_at_2017_04_21_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F527EDGRW-c727fba9b1/pasted_image_at_2017_04_21_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F527EDGRW-c727fba9b1/pasted_image_at_2017_04_21_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F527EDGRW-c727fba9b1/pasted_image_at_2017_04_21_03_02_pm_720.png",
            "original_w": 786,
            "original_h": 487,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F527EDGRW/pasted_image_at_2017_04_21_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "smirk_cat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F52QXTASX",
            "timestamp": 1492808495,
            "name": "Pasted image at 2017_04_21 03_01 PM.png",
            "title": "Pasted image at 2017-04-21, 3:01 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F52QXTASX/pasted_image_at_2017_04_21_03_01_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F52QXTASX/download/pasted_image_at_2017_04_21_03_01_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F52QXTASX-c066b90a25/pasted_image_at_2017_04_21_03_01_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F52QXTASX-c066b90a25/pasted_image_at_2017_04_21_03_01_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F52QXTASX-c066b90a25/pasted_image_at_2017_04_21_03_01_pm_160.png",
            "original_w": 620,
            "original_h": 430,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F52QXTASX/pasted_image_at_2017_04_21_03_01_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "rocket",
                    "users": [
                        "U1324MZRS",
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G",
                        "U47SKS1D2"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F527A53C0",
            "timestamp": 1492808055,
            "name": "Pasted image at 2017_04_21 02_54 PM.png",
            "title": "Don't care",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F527A53C0/pasted_image_at_2017_04_21_02_54_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F527A53C0/download/pasted_image_at_2017_04_21_02_54_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F527A53C0-09f3408bc5/pasted_image_at_2017_04_21_02_54_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F527A53C0-09f3408bc5/pasted_image_at_2017_04_21_02_54_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F527A53C0-09f3408bc5/pasted_image_at_2017_04_21_02_54_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F527A53C0-09f3408bc5/pasted_image_at_2017_04_21_02_54_pm_720.png",
            "original_w": 872,
            "original_h": 784,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F527A53C0/pasted_image_at_2017_04_21_02_54_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "honey_pot",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4Z49CJJE",
            "timestamp": 1492117520,
            "name": "Pasted image at 2017_04_13 03_05 PM.png",
            "title": "Pasted image at 2017-04-13, 3:05 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z49CJJE/pasted_image_at_2017_04_13_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z49CJJE/download/pasted_image_at_2017_04_13_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z49CJJE-722e81f347/pasted_image_at_2017_04_13_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z49CJJE-722e81f347/pasted_image_at_2017_04_13_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z49CJJE-722e81f347/pasted_image_at_2017_04_13_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z49CJJE-722e81f347/pasted_image_at_2017_04_13_03_05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4Z49CJJE-722e81f347/pasted_image_at_2017_04_13_03_05_pm_1024.png",
            "original_w": 750,
            "original_h": 1189,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F4Z49CJJE/pasted_image_at_2017_04_13_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "thinking_face",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "heart_eyes",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "panda_face",
                    "users": [
                        "U2DU3TZL7",
                        "U2PKVNC87"
                    ],
                    "count": 2
                },
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4ZQBJ3B8",
            "timestamp": 1492117508,
            "name": "Drawing (1).png",
            "title": "such a fail",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4ZQBJ3B8/drawing__1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4ZQBJ3B8/download/drawing__1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQBJ3B8-57ad2676a2/drawing__1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQBJ3B8-57ad2676a2/drawing__1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQBJ3B8-57ad2676a2/drawing__1__160.png",
            "original_w": 584,
            "original_h": 567,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F4ZQBJ3B8/drawing__1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "meat_on_bone",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "lemon",
                    "users": [
                        "U0ZV9NY93",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4YDSGFT3",
            "timestamp": 1492117499,
            "name": "Screen Shot 2017-04-13 at 3.04.35 PM.png",
            "title": "Screen Shot 2017-04-13 at 3.04.35 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4YDSGFT3/screen_shot_2017-04-13_at_3.04.35_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4YDSGFT3/download/screen_shot_2017-04-13_at_3.04.35_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4YDSGFT3-a6de609d9c/screen_shot_2017-04-13_at_3.04.35_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4YDSGFT3-a6de609d9c/screen_shot_2017-04-13_at_3.04.35_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4YDSGFT3-a6de609d9c/screen_shot_2017-04-13_at_3.04.35_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4YDSGFT3-a6de609d9c/screen_shot_2017-04-13_at_3.04.35_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4YDSGFT3-a6de609d9c/screen_shot_2017-04-13_at_3.04.35_pm_1024.png",
            "original_w": 792,
            "original_h": 1230,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F4YDSGFT3/screen_shot_2017-04-13_at_3.04.35_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "neckbeard",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7",
                        "U1000HJ8H",
                        "U13FJA80G"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4Z492G1G",
            "timestamp": 1492117488,
            "name": "Slopwdude.jpg",
            "title": "Slopwdude.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z492G1G/slopwdude.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z492G1G/download/slopwdude.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z492G1G-974f334266/slopwdude_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z492G1G-974f334266/slopwdude_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z492G1G-974f334266/slopwdude_160.jpg",
            "original_w": 600,
            "original_h": 435,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F4Z492G1G/slopwdude.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "maple_leaf",
                    "users": [
                        "U0ZV9NY93",
                        "U0J6ZJTDM",
                        "U13FJA80G",
                        "U2G4XKRRU",
                        "U1000HJ8H"
                    ],
                    "count": 5
                },
                {
                    "name": "four",
                    "users": [
                        "U2PG17XKJ",
                        "U13FJA80G",
                        "U0ZV9NY93",
                        "U2G4XKRRU"
                    ],
                    "count": 4
                },
                {
                    "name": "two",
                    "users": [
                        "U2PG17XKJ",
                        "U13FJA80G",
                        "U0ZV9NY93",
                        "U2G4XKRRU"
                    ],
                    "count": 4
                },
                {
                    "name": "zero",
                    "users": [
                        "U0ZV9NY93",
                        "U2PG17XKJ",
                        "U2G4XKRRU"
                    ],
                    "count": 3
                },
                {
                    "name": "trophy",
                    "users": [
                        "U0ZV9NY93",
                        "U1000HJ8H",
                        "U2G4XKRRU",
                        "U2CL304CW"
                    ],
                    "count": 4
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U1000HJ8H",
                        "U2G4XKRRU",
                        "U0B52QL07"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4Z6XU84V",
            "timestamp": 1492117472,
            "name": "Pasted image at 2017_04_13 03_04 PM.png",
            "title": "Pasted image at 2017-04-13, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z6XU84V/pasted_image_at_2017_04_13_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z6XU84V/download/pasted_image_at_2017_04_13_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6XU84V-1ee857df3d/pasted_image_at_2017_04_13_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6XU84V-1ee857df3d/pasted_image_at_2017_04_13_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6XU84V-1ee857df3d/pasted_image_at_2017_04_13_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6XU84V-1ee857df3d/pasted_image_at_2017_04_13_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6XU84V-1ee857df3d/pasted_image_at_2017_04_13_03_04_pm_1024.png",
            "original_w": 1455,
            "original_h": 862,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F4Z6XU84V/pasted_image_at_2017_04_13_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW"
                    ],
                    "count": 1
                },
                {
                    "name": "fearful",
                    "users": [
                        "U13GTGD7G",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 3
                },
                {
                    "name": "scream",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Z29TKKM",
            "timestamp": 1492117457,
            "name": "Pasted image at 2017_04_13 03_04 PM.png",
            "title": "Pasted image at 2017-04-13, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z29TKKM/pasted_image_at_2017_04_13_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z29TKKM/download/pasted_image_at_2017_04_13_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z29TKKM-59d003cc6a/pasted_image_at_2017_04_13_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z29TKKM-59d003cc6a/pasted_image_at_2017_04_13_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z29TKKM-59d003cc6a/pasted_image_at_2017_04_13_03_04_pm_160.png",
            "original_w": 684,
            "original_h": 606,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F4Z29TKKM/pasted_image_at_2017_04_13_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4ZQMEM9D",
            "timestamp": 1492117442,
            "name": "Pasted image at 2017_04_13 03_03 PM.png",
            "title": "Sloth",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4ZQMEM9D/pasted_image_at_2017_04_13_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4ZQMEM9D/download/pasted_image_at_2017_04_13_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMEM9D-abf9a343bc/pasted_image_at_2017_04_13_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMEM9D-abf9a343bc/pasted_image_at_2017_04_13_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMEM9D-abf9a343bc/pasted_image_at_2017_04_13_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMEM9D-abf9a343bc/pasted_image_at_2017_04_13_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMEM9D-abf9a343bc/pasted_image_at_2017_04_13_03_03_pm_1024.png",
            "original_w": 1080,
            "original_h": 1726,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F4ZQMEM9D/pasted_image_at_2017_04_13_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "baby_bottle",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "pray",
                    "users": [
                        "U2PG17XKJ"
                    ],
                    "count": 1
                },
                {
                    "name": "x",
                    "users": [
                        "U1000HJ8H",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "zzz",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "panda_face",
                    "users": [
                        "U2B523PT9"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4ZQMDE31",
            "timestamp": 1492117435,
            "name": "Pasted image at 2017_04_13 03_03 PM.png",
            "title": "Pasted image at 2017-04-13, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4ZQMDE31/pasted_image_at_2017_04_13_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4ZQMDE31/download/pasted_image_at_2017_04_13_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMDE31-f94e69ea37/pasted_image_at_2017_04_13_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMDE31-f94e69ea37/pasted_image_at_2017_04_13_03_03_pm_160.png",
            "original_w": 283,
            "original_h": 363,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F4ZQMDE31/pasted_image_at_2017_04_13_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2PG17XKJ",
                        "U0B52QL07",
                        "U13FJA80G"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4ZQMCUHM",
            "timestamp": 1492117432,
            "name": "Pasted image at 2017_04_13 03_03 PM.png",
            "title": "Pasted image at 2017-04-13, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4ZQMCUHM/pasted_image_at_2017_04_13_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4ZQMCUHM/download/pasted_image_at_2017_04_13_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMCUHM-bbbcae7556/pasted_image_at_2017_04_13_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMCUHM-bbbcae7556/pasted_image_at_2017_04_13_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMCUHM-bbbcae7556/pasted_image_at_2017_04_13_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMCUHM-bbbcae7556/pasted_image_at_2017_04_13_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQMCUHM-bbbcae7556/pasted_image_at_2017_04_13_03_03_pm_1024.png",
            "original_w": 1312,
            "original_h": 832,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F4ZQMCUHM/pasted_image_at_2017_04_13_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "glitch_crab",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Z48FD42",
            "timestamp": 1492117422,
            "name": "Screen Shot 2017-04-13 at 3.03.30 PM.png",
            "title": "Screen Shot 2017-04-13 at 3.03.30 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z48FD42/screen_shot_2017-04-13_at_3.03.30_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z48FD42/download/screen_shot_2017-04-13_at_3.03.30_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z48FD42-70cc06240a/screen_shot_2017-04-13_at_3.03.30_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z48FD42-70cc06240a/screen_shot_2017-04-13_at_3.03.30_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z48FD42-70cc06240a/screen_shot_2017-04-13_at_3.03.30_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z48FD42-70cc06240a/screen_shot_2017-04-13_at_3.03.30_pm_720.png",
            "original_w": 771,
            "original_h": 394,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F4Z48FD42/screen_shot_2017-04-13_at_3.03.30_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "slightly_smiling_face",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "hugging_face",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "white_check_mark",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Z29GBB5",
            "timestamp": 1492117418,
            "name": "Screen Shot 2017-04-13 at 3.03.08 PM.png",
            "title": "Just Hanging Around",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z29GBB5/screen_shot_2017-04-13_at_3.03.08_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z29GBB5/download/screen_shot_2017-04-13_at_3.03.08_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z29GBB5-f7dd931441/screen_shot_2017-04-13_at_3.03.08_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z29GBB5-f7dd931441/screen_shot_2017-04-13_at_3.03.08_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z29GBB5-f7dd931441/screen_shot_2017-04-13_at_3.03.08_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z29GBB5-f7dd931441/screen_shot_2017-04-13_at_3.03.08_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4Z29GBB5-f7dd931441/screen_shot_2017-04-13_at_3.03.08_pm_1024.png",
            "original_w": 1387,
            "original_h": 719,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F4Z29GBB5/screen_shot_2017-04-13_at_3.03.08_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "thinking_face",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4ZQM97JB",
            "timestamp": 1492117414,
            "name": "Pasted image at 2017_04_13 03_03 PM.png",
            "title": "flash",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4ZQM97JB/pasted_image_at_2017_04_13_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4ZQM97JB/download/pasted_image_at_2017_04_13_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQM97JB-c0b8740654/pasted_image_at_2017_04_13_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQM97JB-c0b8740654/pasted_image_at_2017_04_13_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQM97JB-c0b8740654/pasted_image_at_2017_04_13_03_03_pm_160.png",
            "original_w": 617,
            "original_h": 570,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F4ZQM97JB/pasted_image_at_2017_04_13_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U2A3TTW4V",
                        "U2HN6FYRM",
                        "U13GTGD7G"
                    ],
                    "count": 3
                },
                {
                    "name": "necktie",
                    "users": [
                        "U13GTGD7G",
                        "U1000HJ8H",
                        "U2KRMJ9MM",
                        "U29PKD0NN",
                        "U2PG17XKJ",
                        "U47UK2SN6"
                    ],
                    "count": 6
                },
                {
                    "name": "movie_camera",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4YDRRJHF",
            "timestamp": 1492117413,
            "name": "Screen Shot 2017-04-13 at 3.03.21 PM.png",
            "title": "Screen Shot 2017-04-13 at 3.03.21 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4YDRRJHF/screen_shot_2017-04-13_at_3.03.21_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4YDRRJHF/download/screen_shot_2017-04-13_at_3.03.21_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRRJHF-cfb10ea7b3/screen_shot_2017-04-13_at_3.03.21_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRRJHF-cfb10ea7b3/screen_shot_2017-04-13_at_3.03.21_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRRJHF-cfb10ea7b3/screen_shot_2017-04-13_at_3.03.21_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRRJHF-cfb10ea7b3/screen_shot_2017-04-13_at_3.03.21_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRRJHF-cfb10ea7b3/screen_shot_2017-04-13_at_3.03.21_pm_1024.png",
            "original_w": 2596,
            "original_h": 1394,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F4YDRRJHF/screen_shot_2017-04-13_at_3.03.21_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Z48BFBL",
            "timestamp": 1492117403,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27D07RKN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z48BFBL/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z48BFBL/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z48BFBL-5a33e7faa9/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z48BFBL-5a33e7faa9/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z48BFBL-5a33e7faa9/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z48BFBL-5a33e7faa9/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4Z48BFBL-5a33e7faa9/drawing_1024.png",
            "original_w": 1455,
            "original_h": 906,
            "permalink": "https://appdirect.slack.com/files/jernej.klancic/F4Z48BFBL/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "bird",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4YDRP6RF",
            "timestamp": 1492117401,
            "name": "Drawing (2).png",
            "title": "Drawing (2).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2J48K6QY",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4YDRP6RF/drawing__2_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4YDRP6RF/download/drawing__2_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRP6RF-4e24b27ce0/drawing__2__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRP6RF-4e24b27ce0/drawing__2__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRP6RF-4e24b27ce0/drawing__2__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRP6RF-4e24b27ce0/drawing__2__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRP6RF-4e24b27ce0/drawing__2__1024.png",
            "original_w": 1292,
            "original_h": 749,
            "permalink": "https://appdirect.slack.com/files/mike.mahpoy/F4YDRP6RF/drawing__2_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U0ZV9NY93",
                        "U1324MZRS",
                        "U0B52QL07",
                        "U2G4XKRRU"
                    ],
                    "count": 4
                },
                {
                    "name": "hankey",
                    "users": [
                        "U2HN6FYRM",
                        "U2DU3TZL7",
                        "U2PKVNC87"
                    ],
                    "count": 3
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Z5DTKBN",
            "timestamp": 1492117399,
            "name": "Image uploaded from iOS.jpg",
            "title": "Image uploaded from iOS",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0J6ZJTDM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z5DTKBN/image_uploaded_from_ios.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z5DTKBN/download/image_uploaded_from_ios.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z5DTKBN-66b4fcf083/image_uploaded_from_ios_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z5DTKBN-66b4fcf083/image_uploaded_from_ios_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z5DTKBN-66b4fcf083/image_uploaded_from_ios_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z5DTKBN-66b4fcf083/image_uploaded_from_ios_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4Z5DTKBN-66b4fcf083/image_uploaded_from_ios_1024.jpg",
            "original_w": 1534,
            "original_h": 1304,
            "permalink": "https://appdirect.slack.com/files/arjun.krishna/F4Z5DTKBN/image_uploaded_from_ios.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "muscle",
                    "users": [
                        "U1324MZRS",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "pma",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Z6X8MPX",
            "timestamp": 1492117396,
            "name": "Pasted image at 2017_04_13 03_03 PM.png",
            "title": "Pasted image at 2017-04-13, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z6X8MPX/pasted_image_at_2017_04_13_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z6X8MPX/download/pasted_image_at_2017_04_13_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X8MPX-a5b5edb392/pasted_image_at_2017_04_13_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X8MPX-a5b5edb392/pasted_image_at_2017_04_13_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X8MPX-a5b5edb392/pasted_image_at_2017_04_13_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X8MPX-a5b5edb392/pasted_image_at_2017_04_13_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X8MPX-a5b5edb392/pasted_image_at_2017_04_13_03_03_pm_1024.png",
            "original_w": 1460,
            "original_h": 730,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F4Z6X8MPX/pasted_image_at_2017_04_13_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "car",
                    "users": [
                        "U2PG17XKJ",
                        "U0ZV9NY93"
                    ],
                    "count": 2
                },
                {
                    "name": "scream",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "anguished",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "beers",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Z5DQABE",
            "timestamp": 1492117393,
            "name": "Pasted image at 2017_04_13 03_03 PM.png",
            "title": "Pasted image at 2017-04-13, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U211SR63A",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z5DQABE/pasted_image_at_2017_04_13_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z5DQABE/download/pasted_image_at_2017_04_13_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z5DQABE-1136f3258b/pasted_image_at_2017_04_13_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z5DQABE-1136f3258b/pasted_image_at_2017_04_13_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z5DQABE-1136f3258b/pasted_image_at_2017_04_13_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z5DQABE-1136f3258b/pasted_image_at_2017_04_13_03_03_pm_720.png",
            "original_w": 884,
            "original_h": 569,
            "permalink": "https://appdirect.slack.com/files/rita.bereski/F4Z5DQABE/pasted_image_at_2017_04_13_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U1000HJ8H"
                    ],
                    "count": 1
                },
                {
                    "name": "fiesta_parrot",
                    "users": [
                        "U1324MZRS",
                        "U2PG17XKJ",
                        "U2CL304CW",
                        "U2KRMJ9MM"
                    ],
                    "count": 4
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U0ZV27VBQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "upside_down_face",
                    "users": [
                        "U2PG17XKJ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Z6X5ZKP",
            "timestamp": 1492117392,
            "name": "Screen Shot 2017-04-13 at 3.02.51 PM.png",
            "title": "Screen Shot 2017-04-13 at 3.02.51 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z6X5ZKP/screen_shot_2017-04-13_at_3.02.51_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z6X5ZKP/download/screen_shot_2017-04-13_at_3.02.51_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X5ZKP-41246fbc9e/screen_shot_2017-04-13_at_3.02.51_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X5ZKP-41246fbc9e/screen_shot_2017-04-13_at_3.02.51_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X5ZKP-41246fbc9e/screen_shot_2017-04-13_at_3.02.51_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X5ZKP-41246fbc9e/screen_shot_2017-04-13_at_3.02.51_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X5ZKP-41246fbc9e/screen_shot_2017-04-13_at_3.02.51_pm_1024.png",
            "original_w": 1408,
            "original_h": 958,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F4Z6X5ZKP/screen_shot_2017-04-13_at_3.02.51_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U2HN6FYRM",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "ok_hand",
                    "users": [
                        "U1324MZRS",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4ZQAFTHU",
            "timestamp": 1492117386,
            "name": "sloth-potato head.png",
            "title": "sloth-potato head.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U3L6JARDE",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4ZQAFTHU/sloth-potato_head.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4ZQAFTHU/download/sloth-potato_head.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQAFTHU-78767b5815/sloth-potato_head_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQAFTHU-78767b5815/sloth-potato_head_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQAFTHU-78767b5815/sloth-potato_head_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQAFTHU-78767b5815/sloth-potato_head_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4ZQAFTHU-78767b5815/sloth-potato_head_1024.png",
            "original_w": 1215,
            "original_h": 730,
            "permalink": "https://appdirect.slack.com/files/asmi.joshi/F4ZQAFTHU/sloth-potato_head.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "smile",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Z6X2V5K",
            "timestamp": 1492117385,
            "name": "Drawing (7).jpeg",
            "title": "Drawing (7).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z6X2V5K/drawing__7_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z6X2V5K/download/drawing__7_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X2V5K-3047cc1335/drawing__7__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X2V5K-3047cc1335/drawing__7__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X2V5K-3047cc1335/drawing__7__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X2V5K-3047cc1335/drawing__7__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6X2V5K-3047cc1335/drawing__7__1024.jpg",
            "original_w": 1695,
            "original_h": 900,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F4Z6X2V5K/drawing__7_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "sunglasses",
                    "users": [
                        "U1324MZRS",
                        "U2HN6FYRM",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4YDRE8TT",
            "timestamp": 1492117378,
            "name": "Screen Shot 2017-04-13 at 3.02.35 PM.png",
            "title": "Screen Shot 2017-04-13 at 3.02.35 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4YDRE8TT/screen_shot_2017-04-13_at_3.02.35_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4YDRE8TT/download/screen_shot_2017-04-13_at_3.02.35_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRE8TT-2462fb43cc/screen_shot_2017-04-13_at_3.02.35_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRE8TT-2462fb43cc/screen_shot_2017-04-13_at_3.02.35_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRE8TT-2462fb43cc/screen_shot_2017-04-13_at_3.02.35_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4YDRE8TT-2462fb43cc/screen_shot_2017-04-13_at_3.02.35_pm_720.png",
            "original_w": 728,
            "original_h": 498,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F4YDRE8TT/screen_shot_2017-04-13_at_3.02.35_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U1324MZRS",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4Z6WPWJZ",
            "timestamp": 1492117344,
            "name": "Screen Shot 2017-04-13 at 3.02.11 PM.png",
            "title": "Screen Shot 2017-04-13 at 3.02.11 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z6WPWJZ/screen_shot_2017-04-13_at_3.02.11_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z6WPWJZ/download/screen_shot_2017-04-13_at_3.02.11_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6WPWJZ-3de78f8f64/screen_shot_2017-04-13_at_3.02.11_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6WPWJZ-3de78f8f64/screen_shot_2017-04-13_at_3.02.11_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6WPWJZ-3de78f8f64/screen_shot_2017-04-13_at_3.02.11_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6WPWJZ-3de78f8f64/screen_shot_2017-04-13_at_3.02.11_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4Z6WPWJZ-3de78f8f64/screen_shot_2017-04-13_at_3.02.11_pm_1024.png",
            "original_w": 2344,
            "original_h": 1204,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F4Z6WPWJZ/screen_shot_2017-04-13_at_3.02.11_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7",
                        "U1000HJ8H"
                    ],
                    "count": 2
                },
                {
                    "name": "pizza",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Z28RTT5",
            "timestamp": 1492117342,
            "name": "11898852_427751520758583_8063970269113058306_n.jpg",
            "title": "11898852 427751520758583 8063970269113058306 n",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Z28RTT5/11898852_427751520758583_8063970269113058306_n.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Z28RTT5/download/11898852_427751520758583_8063970269113058306_n.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Z28RTT5-798eb54f13/11898852_427751520758583_8063970269113058306_n_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Z28RTT5-798eb54f13/11898852_427751520758583_8063970269113058306_n_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Z28RTT5-798eb54f13/11898852_427751520758583_8063970269113058306_n_160.jpg",
            "original_w": 648,
            "original_h": 648,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F4Z28RTT5/11898852_427751520758583_8063970269113058306_n.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U29PKD0NN",
                        "U2B523PT9"
                    ],
                    "count": 4
                },
                {
                    "name": "pizza",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U2QUK00RK"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4XSC36AV",
            "timestamp": 1492034160,
            "name": "Pasted image at 2017_04_12 03_55 PM.png",
            "title": "Pasted image at 2017-04-12, 3:55 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4XSC36AV/pasted_image_at_2017_04_12_03_55_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4XSC36AV/download/pasted_image_at_2017_04_12_03_55_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4XSC36AV-4fd09bad6a/pasted_image_at_2017_04_12_03_55_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4XSC36AV-4fd09bad6a/pasted_image_at_2017_04_12_03_55_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4XSC36AV-4fd09bad6a/pasted_image_at_2017_04_12_03_55_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4XSC36AV-4fd09bad6a/pasted_image_at_2017_04_12_03_55_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4XSC36AV-4fd09bad6a/pasted_image_at_2017_04_12_03_55_pm_1024.png",
            "original_w": 1869,
            "original_h": 926,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F4XSC36AV/pasted_image_at_2017_04_12_03_55_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc4YGUU5NW",
                "timestamp": 1492034160,
                "user": "U2A658R7U",
                "is_intro": true,
                "comment": "AutoDraw wasn't able to guess <@U08P10WPQ> programming... I'm disappointed :disappointed:"
            },
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U0ZV9NY93",
                        "U08P10WPQ",
                        "U2PG17XKJ",
                        "U2HN6FYRM",
                        "U0B52QL07",
                        "U1324MZRS",
                        "U2DU3TZL7"
                    ],
                    "count": 7
                }
            ]
        },
        {
            "id": "F4VLQ4B2L",
            "timestamp": 1491600004,
            "name": "Screen Shot 2017-04-07 at 3.19.53 PM.png",
            "title": "Screen Shot 2017-04-07 at 3.19.53 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4VLQ4B2L/screen_shot_2017-04-07_at_3.19.53_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4VLQ4B2L/download/screen_shot_2017-04-07_at_3.19.53_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4VLQ4B2L-87d7ac7f7d/screen_shot_2017-04-07_at_3.19.53_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4VLQ4B2L-87d7ac7f7d/screen_shot_2017-04-07_at_3.19.53_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4VLQ4B2L-87d7ac7f7d/screen_shot_2017-04-07_at_3.19.53_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4VLQ4B2L-87d7ac7f7d/screen_shot_2017-04-07_at_3.19.53_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4VLQ4B2L-87d7ac7f7d/screen_shot_2017-04-07_at_3.19.53_pm_1024.png",
            "original_w": 1384,
            "original_h": 818,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F4VLQ4B2L/screen_shot_2017-04-07_at_3.19.53_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2ASS8TEH",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 3
                },
                {
                    "name": "three",
                    "users": [
                        "U2PKVNC87"
                    ],
                    "count": 1
                },
                {
                    "name": "keycap_ten",
                    "users": [
                        "U2PKVNC87"
                    ],
                    "count": 1
                },
                {
                    "name": "six",
                    "users": [
                        "U2PKVNC87"
                    ],
                    "count": 1
                },
                {
                    "name": "four",
                    "users": [
                        "U2PKVNC87"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4W9UT9A7",
            "timestamp": 1491599107,
            "name": "Pasted image at 2017_04_07 03_05 PM.png",
            "title": "Pasted image at 2017-04-07, 3:05 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4W9UT9A7/pasted_image_at_2017_04_07_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4W9UT9A7/download/pasted_image_at_2017_04_07_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4W9UT9A7-5a594ef705/pasted_image_at_2017_04_07_03_05_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4W9UT9A7-5a594ef705/pasted_image_at_2017_04_07_03_05_pm_160.png",
            "original_w": 381,
            "original_h": 473,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F4W9UT9A7/pasted_image_at_2017_04_07_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trident",
                    "users": [
                        "U0ZV9NY93",
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4WCZMGTE",
            "timestamp": 1491599068,
            "name": "Pasted image at 2017_04_07 03_04 PM.png",
            "title": "Pasted image at 2017-04-07, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4WCZMGTE/pasted_image_at_2017_04_07_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4WCZMGTE/download/pasted_image_at_2017_04_07_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZMGTE-c68cc01229/pasted_image_at_2017_04_07_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZMGTE-c68cc01229/pasted_image_at_2017_04_07_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZMGTE-c68cc01229/pasted_image_at_2017_04_07_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZMGTE-c68cc01229/pasted_image_at_2017_04_07_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZMGTE-c68cc01229/pasted_image_at_2017_04_07_03_04_pm_1024.png",
            "original_w": 1080,
            "original_h": 1726,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F4WCZMGTE/pasted_image_at_2017_04_07_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "-1",
                    "users": [
                        "U1324MZRS",
                        "U21BYUQ1Z",
                        "U1000HJ8H",
                        "U2G1VV7AR",
                        "U29KAMLAK",
                        "U2QUK00RK",
                        "U2J48K6QY",
                        "U3PRE9RQW"
                    ],
                    "count": 8
                },
                {
                    "name": "x",
                    "users": [
                        "U2G1VV7AR",
                        "U21BYUQ1Z",
                        "U2KRMJ9MM",
                        "U29PKD0NN",
                        "U1000HJ8H",
                        "U2J6FK5CZ",
                        "U2G4XKRRU",
                        "U2PG17XKJ",
                        "U0ZV9NY93",
                        "U2ASS8TEH",
                        "U0N226FV4",
                        "U1324MZRS",
                        "U13GTGD7G",
                        "U2J48K6QY",
                        "U3PRE9RQW"
                    ],
                    "count": 15
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U1324MZRS",
                        "U3PRE9RQW"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U0J6ZJTDM",
                        "U3PRE9RQW"
                    ],
                    "count": 5
                },
                {
                    "name": "sleeping",
                    "users": [
                        "U1324MZRS",
                        "U2QUK00RK",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "fire",
                    "users": [
                        "U1324MZRS",
                        "U1000HJ8H",
                        "U2G1VV7AR",
                        "U2ASS8TEH",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 6
                },
                {
                    "name": "trophy",
                    "users": [
                        "U2CL304CW",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "timer_clock",
                    "users": [
                        "U2PG17XKJ",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "trump",
                    "users": [
                        "U2QUK00RK",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "pizza",
                    "users": [
                        "U2A3TTW4V",
                        "U21BYUQ1Z",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 5
                },
                {
                    "name": "information_desk_person",
                    "users": [
                        "U1324MZRS",
                        "U0ZV9NY93"
                    ],
                    "count": 2
                },
                {
                    "name": "conga-parrot",
                    "users": [
                        "U27D07RKN",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "laughing",
                    "users": [
                        "U1000HJ8H",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "programmer",
                    "users": [
                        "U0J6ZJTDM",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "parrotstache",
                    "users": [
                        "U27D07RKN",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "no_entry_sign",
                    "users": [
                        "U2G1VV7AR",
                        "U2J6FK5CZ",
                        "U2QUK00RK",
                        "U1000HJ8H",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U2J48K6QY",
                        "U3PRE9RQW"
                    ],
                    "count": 8
                },
                {
                    "name": "trollface",
                    "users": [
                        "U0ZV9NY93",
                        "U1324MZRS",
                        "U3PRE9RQW"
                    ],
                    "count": 3
                },
                {
                    "name": "feelsgood",
                    "users": [
                        "U27D07RKN",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "fry",
                    "users": [
                        "U27D07RKN",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "trumpet",
                    "users": [
                        "U0ZV27VBQ",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "tophat",
                    "users": [
                        "U21BYUQ1Z",
                        "U1324MZRS",
                        "U0ZV9NY93"
                    ],
                    "count": 3
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U27D07RKN",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "scream_cat",
                    "users": [
                        "U2B523PT9",
                        "U27D07RKN",
                        "U0ZV9NY93",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "sports_medal",
                    "users": [
                        "U2CL304CW",
                        "U2DU3TZL7",
                        "U0ZV9NY93",
                        "U1000HJ8H",
                        "U3PRE9RQW"
                    ],
                    "count": 5
                },
                {
                    "name": "princess",
                    "users": [
                        "U13GTGD7G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4WCZEXFW",
            "timestamp": 1491599048,
            "name": "Screen Shot 2017-04-07 at 3.03.54 PM.png",
            "title": "Screen Shot 2017-04-07 at 3.03.54 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4WCZEXFW/screen_shot_2017-04-07_at_3.03.54_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4WCZEXFW/download/screen_shot_2017-04-07_at_3.03.54_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZEXFW-c2e12c7d2a/screen_shot_2017-04-07_at_3.03.54_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZEXFW-c2e12c7d2a/screen_shot_2017-04-07_at_3.03.54_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZEXFW-c2e12c7d2a/screen_shot_2017-04-07_at_3.03.54_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZEXFW-c2e12c7d2a/screen_shot_2017-04-07_at_3.03.54_pm_720.png",
            "original_w": 798,
            "original_h": 843,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F4WCZEXFW/screen_shot_2017-04-07_at_3.03.54_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "thunder_cloud_and_rain",
                    "users": [
                        "U2A6BJ71Q",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "sunglasses",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4WEGDP6Z",
            "timestamp": 1491599046,
            "name": "Pasted image at 2017_04_07 03_04 PM.png",
            "title": "Pasted image at 2017-04-07, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4WEGDP6Z/pasted_image_at_2017_04_07_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4WEGDP6Z/download/pasted_image_at_2017_04_07_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4WEGDP6Z-f64d5b2e8f/pasted_image_at_2017_04_07_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4WEGDP6Z-f64d5b2e8f/pasted_image_at_2017_04_07_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4WEGDP6Z-f64d5b2e8f/pasted_image_at_2017_04_07_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4WEGDP6Z-f64d5b2e8f/pasted_image_at_2017_04_07_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4WEGDP6Z-f64d5b2e8f/pasted_image_at_2017_04_07_03_04_pm_1024.png",
            "original_w": 1569,
            "original_h": 893,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F4WEGDP6Z/pasted_image_at_2017_04_07_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "skull_and_crossbones",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4W9UCE83",
            "timestamp": 1491599043,
            "name": "Screen Shot 2017-04-07 at 3.03.08 PM.png",
            "title": "Seahorse in the sun",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4W9UCE83/screen_shot_2017-04-07_at_3.03.08_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4W9UCE83/download/screen_shot_2017-04-07_at_3.03.08_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4W9UCE83-80655e7913/screen_shot_2017-04-07_at_3.03.08_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4W9UCE83-80655e7913/screen_shot_2017-04-07_at_3.03.08_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4W9UCE83-80655e7913/screen_shot_2017-04-07_at_3.03.08_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4W9UCE83-80655e7913/screen_shot_2017-04-07_at_3.03.08_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4W9UCE83-80655e7913/screen_shot_2017-04-07_at_3.03.08_pm_1024.png",
            "original_w": 1423,
            "original_h": 829,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F4W9UCE83/screen_shot_2017-04-07_at_3.03.08_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "sunglasses",
                    "users": [
                        "U2G4XKRRU",
                        "U0ZV9NY93"
                    ],
                    "count": 2
                },
                {
                    "name": "sun_with_face",
                    "users": [
                        "U2PG17XKJ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "fire",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4VLGKWQY",
            "timestamp": 1491599026,
            "name": "sea_horse.png",
            "title": "sea_horse.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4VLGKWQY/sea_horse.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4VLGKWQY/download/sea_horse.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4VLGKWQY-789ed0c024/sea_horse_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4VLGKWQY-789ed0c024/sea_horse_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4VLGKWQY-789ed0c024/sea_horse_160.png",
            "original_w": 640,
            "original_h": 640,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F4VLGKWQY/sea_horse.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U2A658R7U",
                        "U0ZV9NY93",
                        "U1000HJ8H",
                        "U054FNLPS",
                        "U3PRE9RQW"
                    ],
                    "count": 5
                },
                {
                    "name": "boom",
                    "users": [
                        "U13GTGD7G",
                        "U13FJA80G",
                        "U2DU3TZL7",
                        "U3PRE9RQW"
                    ],
                    "count": 4
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G",
                        "U3PRE9RQW"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4VLGKNG0",
            "timestamp": 1491599025,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4VLGKNG0/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4VLGKNG0/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4VLGKNG0-25325432d0/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4VLGKNG0-25325432d0/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4VLGKNG0-25325432d0/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4VLGKNG0-25325432d0/drawing_720.png",
            "original_w": 380,
            "original_h": 726,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F4VLGKNG0/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW",
                        "U054FNLPS",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4WCZ67SQ",
            "timestamp": 1491599002,
            "name": "Pasted image at 2017_04_07 03_03 PM.png",
            "title": "Pasted image at 2017-04-07, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4WCZ67SQ/pasted_image_at_2017_04_07_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4WCZ67SQ/download/pasted_image_at_2017_04_07_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZ67SQ-a500917fe9/pasted_image_at_2017_04_07_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZ67SQ-a500917fe9/pasted_image_at_2017_04_07_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZ67SQ-a500917fe9/pasted_image_at_2017_04_07_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4WCZ67SQ-a500917fe9/pasted_image_at_2017_04_07_03_03_pm_720.png",
            "original_w": 887,
            "original_h": 687,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F4WCZ67SQ/pasted_image_at_2017_04_07_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "fiesta_parrot",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "+1",
                    "users": [
                        "U054FNLPS",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4WEG5FUM",
            "timestamp": 1491599001,
            "name": "Pasted image at 2017_04_07 03_03 PM.png",
            "title": "Pasted image at 2017-04-07, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4WEG5FUM/pasted_image_at_2017_04_07_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4WEG5FUM/download/pasted_image_at_2017_04_07_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4WEG5FUM-623fc5bbda/pasted_image_at_2017_04_07_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4WEG5FUM-623fc5bbda/pasted_image_at_2017_04_07_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4WEG5FUM-623fc5bbda/pasted_image_at_2017_04_07_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4WEG5FUM-623fc5bbda/pasted_image_at_2017_04_07_03_03_pm_720.png",
            "original_w": 992,
            "original_h": 833,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F4WEG5FUM/pasted_image_at_2017_04_07_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "anguished",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "crossed_swords",
                    "users": [
                        "U1000HJ8H",
                        "U0ZV9NY93",
                        "U054FNLPS",
                        "U2CL304CW",
                        "U2DU3TZL7"
                    ],
                    "count": 5
                },
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4W9U0WRZ",
            "timestamp": 1491598992,
            "name": "Image uploaded from iOS.jpg",
            "title": "Image uploaded from iOS",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0J6ZJTDM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4W9U0WRZ/image_uploaded_from_ios.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4W9U0WRZ/download/image_uploaded_from_ios.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4W9U0WRZ-68eaf8cee5/image_uploaded_from_ios_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4W9U0WRZ-68eaf8cee5/image_uploaded_from_ios_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4W9U0WRZ-68eaf8cee5/image_uploaded_from_ios_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4W9U0WRZ-68eaf8cee5/image_uploaded_from_ios_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4W9U0WRZ-68eaf8cee5/image_uploaded_from_ios_1024.jpg",
            "original_w": 1496,
            "original_h": 1258,
            "permalink": "https://appdirect.slack.com/files/arjun.krishna/F4W9U0WRZ/image_uploaded_from_ios.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U2A6BJ71Q",
                        "U2G4XKRRU",
                        "U47UK2SN6"
                    ],
                    "count": 5
                },
                {
                    "name": "leaves",
                    "users": [
                        "U0ZV9NY93",
                        "U2PG17XKJ",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "four",
                    "users": [
                        "U0ZV9NY93",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                },
                {
                    "name": "two",
                    "users": [
                        "U0ZV9NY93",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                },
                {
                    "name": "zero",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "grimacing",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4WEFUNJH",
            "timestamp": 1491598987,
            "name": "Screen Shot 2017-04-07 at 3.02.53 PM.png",
            "title": "Screen Shot 2017-04-07 at 3.02.53 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4WEFUNJH/screen_shot_2017-04-07_at_3.02.53_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4WEFUNJH/download/screen_shot_2017-04-07_at_3.02.53_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4WEFUNJH-15f4466c33/screen_shot_2017-04-07_at_3.02.53_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4WEFUNJH-15f4466c33/screen_shot_2017-04-07_at_3.02.53_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4WEFUNJH-15f4466c33/screen_shot_2017-04-07_at_3.02.53_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4WEFUNJH-15f4466c33/screen_shot_2017-04-07_at_3.02.53_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4WEFUNJH-15f4466c33/screen_shot_2017-04-07_at_3.02.53_pm_1024.png",
            "original_w": 1942,
            "original_h": 1382,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F4WEFUNJH/screen_shot_2017-04-07_at_3.02.53_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U2G1VV7AR",
                        "U1324MZRS",
                        "U1000HJ8H",
                        "U2DU3TZL7"
                    ],
                    "count": 4
                },
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4VLG6XLG",
            "timestamp": 1491598975,
            "name": "Screen Shot 2017-04-07 at 3.02.28 PM.png",
            "title": "Screen Shot 2017-04-07 at 3.02.28 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4VLG6XLG/screen_shot_2017-04-07_at_3.02.28_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4VLG6XLG/download/screen_shot_2017-04-07_at_3.02.28_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4VLG6XLG-ee48d393c9/screen_shot_2017-04-07_at_3.02.28_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4VLG6XLG-ee48d393c9/screen_shot_2017-04-07_at_3.02.28_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4VLG6XLG-ee48d393c9/screen_shot_2017-04-07_at_3.02.28_pm_160.png",
            "original_w": 398,
            "original_h": 518,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F4VLG6XLG/screen_shot_2017-04-07_at_3.02.28_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fried_shrimp",
                    "users": [
                        "U0ZV9NY93",
                        "U2PG17XKJ",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "eyes",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4VLG57DW",
            "timestamp": 1491598965,
            "name": "Pasted image at 2017_04_07 03_02 PM.png",
            "title": "LeSeaHorse",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4VLG57DW/pasted_image_at_2017_04_07_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4VLG57DW/download/pasted_image_at_2017_04_07_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4VLG57DW-2653fd9464/pasted_image_at_2017_04_07_03_02_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4VLG57DW-2653fd9464/pasted_image_at_2017_04_07_03_02_pm_160.png",
            "original_w": 271,
            "original_h": 426,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F4VLG57DW/pasted_image_at_2017_04_07_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U1324MZRS",
                        "U2ASS8TEH"
                    ],
                    "count": 2
                },
                {
                    "name": "pma",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4VLG4U3A",
            "timestamp": 1491598963,
            "name": "Drawing(1).jpeg",
            "title": "Drawing(1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4VLG4U3A/drawing_1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4VLG4U3A/download/drawing_1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4VLG4U3A-435e10267e/drawing_1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4VLG4U3A-435e10267e/drawing_1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4VLG4U3A-435e10267e/drawing_1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4VLG4U3A-435e10267e/drawing_1__720.jpg",
            "original_w": 721,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F4VLG4U3A/drawing_1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "horse",
                    "users": [
                        "U0ZV9NY93",
                        "U2G4XKRRU",
                        "U2A6BJ71Q",
                        "U2ASS8TEH",
                        "U13FJA80G"
                    ],
                    "count": 5
                },
                {
                    "name": "conga-parrot",
                    "users": [
                        "U2G4XKRRU",
                        "U1000HJ8H",
                        "U0ZV9NY93",
                        "U13FJA80G"
                    ],
                    "count": 4
                },
                {
                    "name": "trophy",
                    "users": [
                        "U1000HJ8H",
                        "U0ZV9NY93",
                        "U47UK2SN6",
                        "U13FJA80G",
                        "U2CL304CW",
                        "U2DU3TZL7"
                    ],
                    "count": 6
                },
                {
                    "name": "heart_eyes",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "hankey",
                    "users": [
                        "U2J48K6QY"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4W9TP0D9",
            "timestamp": 1491598958,
            "name": "Screen Shot 2017-04-07 at 3.02.18 PM.png",
            "title": "Screen Shot 2017-04-07 at 3.02.18 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4W9TP0D9/screen_shot_2017-04-07_at_3.02.18_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4W9TP0D9/download/screen_shot_2017-04-07_at_3.02.18_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4W9TP0D9-1d9b04f98b/screen_shot_2017-04-07_at_3.02.18_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4W9TP0D9-1d9b04f98b/screen_shot_2017-04-07_at_3.02.18_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4W9TP0D9-1d9b04f98b/screen_shot_2017-04-07_at_3.02.18_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4W9TP0D9-1d9b04f98b/screen_shot_2017-04-07_at_3.02.18_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4W9TP0D9-1d9b04f98b/screen_shot_2017-04-07_at_3.02.18_pm_1024.png",
            "original_w": 1276,
            "original_h": 1166,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F4W9TP0D9/screen_shot_2017-04-07_at_3.02.18_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2A6BJ71Q",
                        "U2CL304CW",
                        "U29PKD0NN",
                        "U054FNLPS"
                    ],
                    "count": 4
                },
                {
                    "name": "heart_eyes",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4W9TCRHR",
            "timestamp": 1491598924,
            "name": "Drawing (6).jpeg",
            "title": "Drawing (6).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4W9TCRHR/drawing__6_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4W9TCRHR/download/drawing__6_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4W9TCRHR-244f92fd84/drawing__6__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4W9TCRHR-244f92fd84/drawing__6__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4W9TCRHR-244f92fd84/drawing__6__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4W9TCRHR-244f92fd84/drawing__6__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4W9TCRHR-244f92fd84/drawing__6__1024.jpg",
            "original_w": 1055,
            "original_h": 844,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F4W9TCRHR/drawing__6_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U1324MZRS",
                        "U2CL304CW",
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4WEETHRT",
            "timestamp": 1491598860,
            "name": "Image uploaded from iOS.jpg",
            "title": "Image uploaded from iOS",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4WEETHRT/image_uploaded_from_ios.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4WEETHRT/download/image_uploaded_from_ios.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4WEETHRT-5b66964d67/image_uploaded_from_ios_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4WEETHRT-5b66964d67/image_uploaded_from_ios_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4WEETHRT-5b66964d67/image_uploaded_from_ios_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4WEETHRT-5b66964d67/image_uploaded_from_ios_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4WEETHRT-5b66964d67/image_uploaded_from_ios_1024.jpg",
            "original_w": 621,
            "original_h": 1104,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F4WEETHRT/image_uploaded_from_ios.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2QUK00RK",
                        "U1324MZRS",
                        "U13FJA80G"
                    ],
                    "count": 3
                },
                {
                    "name": "iphone",
                    "users": [
                        "U1000HJ8H",
                        "U2PG17XKJ",
                        "U0ZV9NY93"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4VM968P3",
            "timestamp": 1491598841,
            "name": "Screen Shot 2017-04-07 at 3.00.27 PM.png",
            "title": "Screen Shot 2017-04-07 at 3.00.27 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4VM968P3/screen_shot_2017-04-07_at_3.00.27_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4VM968P3/download/screen_shot_2017-04-07_at_3.00.27_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4VM968P3-2a1e05f154/screen_shot_2017-04-07_at_3.00.27_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4VM968P3-2a1e05f154/screen_shot_2017-04-07_at_3.00.27_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4VM968P3-2a1e05f154/screen_shot_2017-04-07_at_3.00.27_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4VM968P3-2a1e05f154/screen_shot_2017-04-07_at_3.00.27_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4VM968P3-2a1e05f154/screen_shot_2017-04-07_at_3.00.27_pm_1024.png",
            "original_w": 1114,
            "original_h": 1036,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F4VM968P3/screen_shot_2017-04-07_at_3.00.27_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "laughing",
                    "users": [
                        "U2CL304CW"
                    ],
                    "count": 1
                },
                {
                    "name": "sunglasses",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U2QUK00RK"
                    ],
                    "count": 1
                },
                {
                    "name": "-1",
                    "users": [
                        "U29KAMLAK"
                    ],
                    "count": 1
                },
                {
                    "name": "disappointed",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4T0PK620",
            "timestamp": 1490995156,
            "name": "Pasted image at 2017_03_31 03_19 PM.png",
            "title": "Pasted image at 2017-03-31, 3:19 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4T0PK620/pasted_image_at_2017_03_31_03_19_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4T0PK620/download/pasted_image_at_2017_03_31_03_19_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4T0PK620-5392851719/pasted_image_at_2017_03_31_03_19_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4T0PK620-5392851719/pasted_image_at_2017_03_31_03_19_pm_160.png",
            "original_w": 318,
            "original_h": 267,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F4T0PK620/pasted_image_at_2017_03_31_03_19_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc4S85DNGG",
                "timestamp": 1490995156,
                "user": "U27DJ3JT0",
                "is_intro": true,
                "comment": "late submission from <@U2ANFV42J>!  She was hesitant to post, but I think it deserves being included:"
            },
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U1324MZRS",
                        "U2DU3TZL7",
                        "U0B52QL07",
                        "U13FJA80G",
                        "U2G1VV7AR"
                    ],
                    "count": 5
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U054FNLPS",
                        "U29PKD0NN",
                        "U13FJA80G"
                    ],
                    "count": 3
                },
                {
                    "name": "heart_eyes",
                    "users": [
                        "U13FJA80G",
                        "U0ZV9NY93"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4S7YQ5T2",
            "timestamp": 1490994312,
            "name": "Screen Shot 2017-03-31 at 3.04.57 PM.png",
            "title": "Screen Shot 2017-03-31 at 3.04.57 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0B52QL07",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4S7YQ5T2/screen_shot_2017-03-31_at_3.04.57_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4S7YQ5T2/download/screen_shot_2017-03-31_at_3.04.57_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4S7YQ5T2-de5f57791e/screen_shot_2017-03-31_at_3.04.57_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4S7YQ5T2-de5f57791e/screen_shot_2017-03-31_at_3.04.57_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4S7YQ5T2-de5f57791e/screen_shot_2017-03-31_at_3.04.57_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4S7YQ5T2-de5f57791e/screen_shot_2017-03-31_at_3.04.57_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4S7YQ5T2-de5f57791e/screen_shot_2017-03-31_at_3.04.57_pm_1024.png",
            "original_w": 2732,
            "original_h": 1362,
            "permalink": "https://appdirect.slack.com/files/aneet.sachdeva/F4S7YQ5T2/screen_shot_2017-03-31_at_3.04.57_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4S8U9NGH",
            "timestamp": 1490994305,
            "name": "Grumpy Koala.jpeg",
            "title": "Grumpy Koala.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U29KAMLAK",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4S8U9NGH/grumpy_koala.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4S8U9NGH/download/grumpy_koala.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4S8U9NGH-6f7dd3396e/grumpy_koala_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4S8U9NGH-6f7dd3396e/grumpy_koala_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4S8U9NGH-6f7dd3396e/grumpy_koala_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4S8U9NGH-6f7dd3396e/grumpy_koala_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4S8U9NGH-6f7dd3396e/grumpy_koala_1024.jpg",
            "original_w": 1210,
            "original_h": 726,
            "permalink": "https://appdirect.slack.com/files/jennifer.aubin/F4S8U9NGH/grumpy_koala.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "koala",
                    "users": [
                        "U2PG17XKJ",
                        "U2DU3TZL7",
                        "U2A6BJ71Q"
                    ],
                    "count": 3
                },
                {
                    "name": "joy",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4S7Y7YV6",
            "timestamp": 1490994250,
            "name": "Pasted image at 2017_03_31 03_04 PM.png",
            "title": "Pasted image at 2017-03-31, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4S7Y7YV6/pasted_image_at_2017_03_31_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4S7Y7YV6/download/pasted_image_at_2017_03_31_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4S7Y7YV6-529238ee29/pasted_image_at_2017_03_31_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4S7Y7YV6-529238ee29/pasted_image_at_2017_03_31_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4S7Y7YV6-529238ee29/pasted_image_at_2017_03_31_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4S7Y7YV6-529238ee29/pasted_image_at_2017_03_31_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4S7Y7YV6-529238ee29/pasted_image_at_2017_03_31_03_04_pm_1024.png",
            "original_w": 1455,
            "original_h": 898,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F4S7Y7YV6/pasted_image_at_2017_03_31_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4SSRFPMZ",
            "timestamp": 1490994247,
            "name": "Drawing (1).png",
            "title": "Drawing (1).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27D07RKN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4SSRFPMZ/drawing__1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4SSRFPMZ/download/drawing__1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4SSRFPMZ-18ef9f4f15/drawing__1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4SSRFPMZ-18ef9f4f15/drawing__1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4SSRFPMZ-18ef9f4f15/drawing__1__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4SSRFPMZ-18ef9f4f15/drawing__1__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4SSRFPMZ-18ef9f4f15/drawing__1__1024.png",
            "original_w": 1695,
            "original_h": 940,
            "permalink": "https://appdirect.slack.com/files/jernej.klancic/F4SSRFPMZ/drawing__1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "black_square_button",
                    "users": [
                        "U27DJ3JT0",
                        "U13FJA80G",
                        "U2DU3TZL7",
                        "U0ZV9NY93"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4TKC6E3G",
            "timestamp": 1490994244,
            "name": "Screen Shot 2017-03-31 at 4.03.46 PM.png",
            "title": "Screen Shot 2017-03-31 at 4.03.46 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4TKC6E3G/screen_shot_2017-03-31_at_4.03.46_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4TKC6E3G/download/screen_shot_2017-03-31_at_4.03.46_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4TKC6E3G-556afe0814/screen_shot_2017-03-31_at_4.03.46_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4TKC6E3G-556afe0814/screen_shot_2017-03-31_at_4.03.46_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4TKC6E3G-556afe0814/screen_shot_2017-03-31_at_4.03.46_pm_160.png",
            "original_w": 380,
            "original_h": 596,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F4TKC6E3G/screen_shot_2017-03-31_at_4.03.46_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4T0GCJ8L",
            "timestamp": 1490994242,
            "name": "Pasted image at 2017_03_31 03_03 PM.png",
            "title": "Koala",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4T0GCJ8L/pasted_image_at_2017_03_31_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4T0GCJ8L/download/pasted_image_at_2017_03_31_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4T0GCJ8L-a1c0d805f8/pasted_image_at_2017_03_31_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4T0GCJ8L-a1c0d805f8/pasted_image_at_2017_03_31_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4T0GCJ8L-a1c0d805f8/pasted_image_at_2017_03_31_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4T0GCJ8L-a1c0d805f8/pasted_image_at_2017_03_31_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4T0GCJ8L-a1c0d805f8/pasted_image_at_2017_03_31_03_03_pm_1024.png",
            "original_w": 750,
            "original_h": 1189,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F4T0GCJ8L/pasted_image_at_2017_03_31_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "x",
                    "users": [
                        "U2A6BJ71Q",
                        "U2G1VV7AR",
                        "U29KAMLAK",
                        "U2CL304CW",
                        "U1324MZRS",
                        "U1000HJ8H"
                    ],
                    "count": 6
                },
                {
                    "name": "grin",
                    "users": [
                        "U2PG17XKJ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "-1",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "fist",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4T1Y0DC5",
            "timestamp": 1490994236,
            "name": "Pasted image at 2017_03_31 03_03 PM.png",
            "title": "koala - almost missed it",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4T1Y0DC5/pasted_image_at_2017_03_31_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4T1Y0DC5/download/pasted_image_at_2017_03_31_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4T1Y0DC5-6d1dd976c9/pasted_image_at_2017_03_31_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4T1Y0DC5-6d1dd976c9/pasted_image_at_2017_03_31_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4T1Y0DC5-6d1dd976c9/pasted_image_at_2017_03_31_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4T1Y0DC5-6d1dd976c9/pasted_image_at_2017_03_31_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4T1Y0DC5-6d1dd976c9/pasted_image_at_2017_03_31_03_03_pm_1024.png",
            "original_w": 1096,
            "original_h": 662,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F4T1Y0DC5/pasted_image_at_2017_03_31_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pig",
                    "users": [
                        "U2G1VV7AR",
                        "U2PG17XKJ",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4TKPSWBH",
            "timestamp": 1490994231,
            "name": "Pasted image at 2017_03_31 03_03 PM.png",
            "title": "Pasted image at 2017-03-31, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4TKPSWBH/pasted_image_at_2017_03_31_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4TKPSWBH/download/pasted_image_at_2017_03_31_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4TKPSWBH-46281c3178/pasted_image_at_2017_03_31_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4TKPSWBH-46281c3178/pasted_image_at_2017_03_31_03_03_pm_160.png",
            "original_w": 266,
            "original_h": 331,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F4TKPSWBH/pasted_image_at_2017_03_31_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart_eyes",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4SSR98AF",
            "timestamp": 1490994215,
            "name": "Screen Shot 2017-03-31 at 3.03.20 PM.png",
            "title": "Screen Shot 2017-03-31 at 3.03.20 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4SSR98AF/screen_shot_2017-03-31_at_3.03.20_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4SSR98AF/download/screen_shot_2017-03-31_at_3.03.20_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4SSR98AF-c9a9335b07/screen_shot_2017-03-31_at_3.03.20_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4SSR98AF-c9a9335b07/screen_shot_2017-03-31_at_3.03.20_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4SSR98AF-c9a9335b07/screen_shot_2017-03-31_at_3.03.20_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4SSR98AF-c9a9335b07/screen_shot_2017-03-31_at_3.03.20_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4SSR98AF-c9a9335b07/screen_shot_2017-03-31_at_3.03.20_pm_1024.png",
            "original_w": 2180,
            "original_h": 1332,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F4SSR98AF/screen_shot_2017-03-31_at_3.03.20_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G",
                        "U2CL304CW"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4T0G6KNG",
            "timestamp": 1490994210,
            "name": "Pasted image at 2017_03_31 03_03 PM.png",
            "title": "Pasted image at 2017-03-31, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4T0G6KNG/pasted_image_at_2017_03_31_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4T0G6KNG/download/pasted_image_at_2017_03_31_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4T0G6KNG-9dae456b22/pasted_image_at_2017_03_31_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4T0G6KNG-9dae456b22/pasted_image_at_2017_03_31_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4T0G6KNG-9dae456b22/pasted_image_at_2017_03_31_03_03_pm_160.png",
            "original_w": 671,
            "original_h": 614,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F4T0G6KNG/pasted_image_at_2017_03_31_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U054FNLPS",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4TKBU86A",
            "timestamp": 1490994204,
            "name": "Screen Shot 2017-03-31 at 3.03.04 PM.png",
            "title": "Screen Shot 2017-03-31 at 3.03.04 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4TKBU86A/screen_shot_2017-03-31_at_3.03.04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4TKBU86A/download/screen_shot_2017-03-31_at_3.03.04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4TKBU86A-60e48e699a/screen_shot_2017-03-31_at_3.03.04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4TKBU86A-60e48e699a/screen_shot_2017-03-31_at_3.03.04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4TKBU86A-60e48e699a/screen_shot_2017-03-31_at_3.03.04_pm_160.png",
            "original_w": 632,
            "original_h": 347,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F4TKBU86A/screen_shot_2017-03-31_at_3.03.04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G",
                        "U054FNLPS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4TKPM7P1",
            "timestamp": 1490994202,
            "name": "Screen Shot 2017-03-31 at 2.02.56 PM.png",
            "title": "Hello there",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4TKPM7P1/screen_shot_2017-03-31_at_2.02.56_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4TKPM7P1/download/screen_shot_2017-03-31_at_2.02.56_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4TKPM7P1-71d7eaf491/screen_shot_2017-03-31_at_2.02.56_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4TKPM7P1-71d7eaf491/screen_shot_2017-03-31_at_2.02.56_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4TKPM7P1-71d7eaf491/screen_shot_2017-03-31_at_2.02.56_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4TKPM7P1-71d7eaf491/screen_shot_2017-03-31_at_2.02.56_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4TKPM7P1-71d7eaf491/screen_shot_2017-03-31_at_2.02.56_pm_1024.png",
            "original_w": 2060,
            "original_h": 1376,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F4TKPM7P1/screen_shot_2017-03-31_at_2.02.56_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "couple",
                    "users": [
                        "U2PG17XKJ",
                        "U2KRMJ9MM",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "sparkling_heart",
                    "users": [
                        "U2G1VV7AR",
                        "U2KRMJ9MM"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4S7XSTME",
            "timestamp": 1490994199,
            "name": "Pasted image at 2017_03_31 03_03 PM.png",
            "title": "so sad...  Not sure why",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4S7XSTME/pasted_image_at_2017_03_31_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4S7XSTME/download/pasted_image_at_2017_03_31_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4S7XSTME-5dadbba998/pasted_image_at_2017_03_31_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4S7XSTME-5dadbba998/pasted_image_at_2017_03_31_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4S7XSTME-5dadbba998/pasted_image_at_2017_03_31_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4S7XSTME-5dadbba998/pasted_image_at_2017_03_31_03_03_pm_720.png",
            "original_w": 881,
            "original_h": 635,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F4S7XSTME/pasted_image_at_2017_03_31_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "deciduous_tree",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                },
                {
                    "name": "wave",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4S8TDF97",
            "timestamp": 1490994196,
            "name": "Screen Shot 2017-03-31 at 3.03.00 PM.png",
            "title": "caught some Zs",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4S8TDF97/screen_shot_2017-03-31_at_3.03.00_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4S8TDF97/download/screen_shot_2017-03-31_at_3.03.00_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4S8TDF97-dd5641ff09/screen_shot_2017-03-31_at_3.03.00_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4S8TDF97-dd5641ff09/screen_shot_2017-03-31_at_3.03.00_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4S8TDF97-dd5641ff09/screen_shot_2017-03-31_at_3.03.00_pm_160.png",
            "original_w": 614,
            "original_h": 653,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F4S8TDF97/screen_shot_2017-03-31_at_3.03.00_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "baby_bottle",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                },
                {
                    "name": "+1",
                    "users": [
                        "U2G1VV7AR",
                        "U2CL304CW"
                    ],
                    "count": 2
                },
                {
                    "name": "joy",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4SUQAUKC",
            "timestamp": 1490994194,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4SUQAUKC/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4SUQAUKC/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4SUQAUKC-22c15a9212/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4SUQAUKC-22c15a9212/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4SUQAUKC-22c15a9212/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4SUQAUKC-22c15a9212/drawing_720.jpg",
            "original_w": 721,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F4SUQAUKC/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "cactus",
                    "users": [
                        "U054FNLPS",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4T0G1MQU",
            "timestamp": 1490994194,
            "name": "Pasted image at 2017_03_31 03_03 PM.png",
            "title": "Pasted image at 2017-03-31, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4T0G1MQU/pasted_image_at_2017_03_31_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4T0G1MQU/download/pasted_image_at_2017_03_31_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4T0G1MQU-380ab5eacc/pasted_image_at_2017_03_31_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4T0G1MQU-380ab5eacc/pasted_image_at_2017_03_31_03_03_pm_160.png",
            "original_w": 352,
            "original_h": 417,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F4T0G1MQU/pasted_image_at_2017_03_31_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pig",
                    "users": [
                        "U054FNLPS",
                        "U0ZV9NY93"
                    ],
                    "count": 2
                },
                {
                    "name": "beers",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4SSQT84T",
            "timestamp": 1490994177,
            "name": "Drawing (1).png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U47UK2SN6",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4SSQT84T/drawing__1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4SSQT84T/download/drawing__1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4SSQT84T-6dc2d00319/drawing__1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4SSQT84T-6dc2d00319/drawing__1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4SSQT84T-6dc2d00319/drawing__1__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4SSQT84T-6dc2d00319/drawing__1__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4SSQT84T-6dc2d00319/drawing__1__1024.png",
            "original_w": 1134,
            "original_h": 593,
            "permalink": "https://appdirect.slack.com/files/brenna.devlin/F4SSQT84T/drawing__1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "mouse",
                    "users": [
                        "U1324MZRS",
                        "U2A6BJ71Q",
                        "U2DU3TZL7",
                        "U0ZV9NY93"
                    ],
                    "count": 4
                },
                {
                    "name": "joy",
                    "users": [
                        "U054FNLPS",
                        "U2A6BJ71Q",
                        "U2PG17XKJ"
                    ],
                    "count": 3
                },
                {
                    "name": "fire",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "trophy",
                    "users": [
                        "U13FJA80G",
                        "U0ZV9NY93",
                        "U1000HJ8H"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4SSQQ4HH",
            "timestamp": 1490994160,
            "name": "Pasted image at 2017_03_31 03_02 PM.png",
            "title": "Hey its me a koala",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4SSQQ4HH/pasted_image_at_2017_03_31_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4SSQQ4HH/download/pasted_image_at_2017_03_31_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4SSQQ4HH-02a1c3908e/pasted_image_at_2017_03_31_03_02_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4SSQQ4HH-02a1c3908e/pasted_image_at_2017_03_31_03_02_pm_160.png",
            "original_w": 478,
            "original_h": 413,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F4SSQQ4HH/pasted_image_at_2017_03_31_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "white_frowning_face",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "scream",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4SUPU4UA",
            "timestamp": 1490994141,
            "name": "Drawing (5).jpeg",
            "title": "Drawing (5).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4SUPU4UA/drawing__5_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4SUPU4UA/download/drawing__5_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4SUPU4UA-2129e484b1/drawing__5__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4SUPU4UA-2129e484b1/drawing__5__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4SUPU4UA-2129e484b1/drawing__5__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4SUPU4UA-2129e484b1/drawing__5__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4SUPU4UA-2129e484b1/drawing__5__1024.jpg",
            "original_w": 1141,
            "original_h": 588,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F4SUPU4UA/drawing__5_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                },
                {
                    "name": "middle_finger",
                    "users": [
                        "U2PG17XKJ",
                        "U2G1VV7AR"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4PJXNHN1",
            "timestamp": 1490389560,
            "name": "Pasted image at 2017_03_24 03_05 PM.png",
            "title": "wooper",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PJXNHN1/pasted_image_at_2017_03_24_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PJXNHN1/download/pasted_image_at_2017_03_24_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PJXNHN1-bc7e7a04a7/pasted_image_at_2017_03_24_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4PJXNHN1-bc7e7a04a7/pasted_image_at_2017_03_24_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PJXNHN1-bc7e7a04a7/pasted_image_at_2017_03_24_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4PJXNHN1-bc7e7a04a7/pasted_image_at_2017_03_24_03_05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4PJXNHN1-bc7e7a04a7/pasted_image_at_2017_03_24_03_05_pm_1024.png",
            "original_w": 1034,
            "original_h": 811,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F4PJXNHN1/pasted_image_at_2017_03_24_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F4PHFF62G",
            "timestamp": 1490389520,
            "name": "Screen Shot 2017-03-24 at 3.05.01 PM.png",
            "title": "Screen Shot 2017-03-24 at 3.05.01 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0B52QL07",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PHFF62G/screen_shot_2017-03-24_at_3.05.01_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PHFF62G/download/screen_shot_2017-03-24_at_3.05.01_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PHFF62G-1fa0be3c28/screen_shot_2017-03-24_at_3.05.01_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4PHFF62G-1fa0be3c28/screen_shot_2017-03-24_at_3.05.01_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PHFF62G-1fa0be3c28/screen_shot_2017-03-24_at_3.05.01_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4PHFF62G-1fa0be3c28/screen_shot_2017-03-24_at_3.05.01_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4PHFF62G-1fa0be3c28/screen_shot_2017-03-24_at_3.05.01_pm_1024.png",
            "original_w": 2754,
            "original_h": 1520,
            "permalink": "https://appdirect.slack.com/files/aneet.sachdeva/F4PHFF62G/screen_shot_2017-03-24_at_3.05.01_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4PJX3MJ9",
            "timestamp": 1490389472,
            "name": "Pasted image at 2017_03_24 03_04 PM.png",
            "title": "Pasted image at 2017-03-24, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PJX3MJ9/pasted_image_at_2017_03_24_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PJX3MJ9/download/pasted_image_at_2017_03_24_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PJX3MJ9-280b65c30d/pasted_image_at_2017_03_24_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4PJX3MJ9-280b65c30d/pasted_image_at_2017_03_24_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PJX3MJ9-280b65c30d/pasted_image_at_2017_03_24_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4PJX3MJ9-280b65c30d/pasted_image_at_2017_03_24_03_04_pm_720.png",
            "original_w": 918,
            "original_h": 581,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F4PJX3MJ9/pasted_image_at_2017_03_24_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4PHF2Q4C",
            "timestamp": 1490389471,
            "name": "Pasted image at 2017_03_24 03_04 PM.png",
            "title": "Pasted image at 2017-03-24, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PHF2Q4C/pasted_image_at_2017_03_24_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PHF2Q4C/download/pasted_image_at_2017_03_24_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PHF2Q4C-a763ec4d6e/pasted_image_at_2017_03_24_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4PHF2Q4C-a763ec4d6e/pasted_image_at_2017_03_24_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PHF2Q4C-a763ec4d6e/pasted_image_at_2017_03_24_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4PHF2Q4C-a763ec4d6e/pasted_image_at_2017_03_24_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4PHF2Q4C-a763ec4d6e/pasted_image_at_2017_03_24_03_04_pm_1024.png",
            "original_w": 1080,
            "original_h": 1726,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F4PHF2Q4C/pasted_image_at_2017_03_24_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "-1",
                    "users": [
                        "U1324MZRS",
                        "U2CL304CW"
                    ],
                    "count": 2
                },
                {
                    "name": "trollface",
                    "users": [
                        "U2CL304CW",
                        "U2G4XKRRU"
                    ],
                    "count": 2
                },
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4PJWPPC5",
            "timestamp": 1490389443,
            "name": "Screen Shot 2017-03-24 at 3.03.49 PM.png",
            "title": "Screen Shot 2017-03-24 at 3.03.49 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PJWPPC5/screen_shot_2017-03-24_at_3.03.49_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PJWPPC5/download/screen_shot_2017-03-24_at_3.03.49_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWPPC5-a66713bc9e/screen_shot_2017-03-24_at_3.03.49_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWPPC5-a66713bc9e/screen_shot_2017-03-24_at_3.03.49_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWPPC5-a66713bc9e/screen_shot_2017-03-24_at_3.03.49_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWPPC5-a66713bc9e/screen_shot_2017-03-24_at_3.03.49_pm_720.png",
            "original_w": 908,
            "original_h": 738,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F4PJWPPC5/screen_shot_2017-03-24_at_3.03.49_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "beers",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4NRSS3JM",
            "timestamp": 1490389427,
            "name": "crazy_animal.png",
            "title": "crazy_animal.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4NRSS3JM/crazy_animal.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4NRSS3JM/download/crazy_animal.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSS3JM-4a842058d6/crazy_animal_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSS3JM-4a842058d6/crazy_animal_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSS3JM-4a842058d6/crazy_animal_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSS3JM-4a842058d6/crazy_animal_720.png",
            "original_w": 754,
            "original_h": 473,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F4NRSS3JM/crazy_animal.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "art",
                    "users": [
                        "U0BT0NXEY"
                    ],
                    "count": 1
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4PHEL6BE",
            "timestamp": 1490389426,
            "name": "Screen Shot 2017-03-24 at 3.03.24 PM.png",
            "title": "Chubby AXOLOTL",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PHEL6BE/screen_shot_2017-03-24_at_3.03.24_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PHEL6BE/download/screen_shot_2017-03-24_at_3.03.24_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PHEL6BE-86f5b6a2d2/screen_shot_2017-03-24_at_3.03.24_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4PHEL6BE-86f5b6a2d2/screen_shot_2017-03-24_at_3.03.24_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PHEL6BE-86f5b6a2d2/screen_shot_2017-03-24_at_3.03.24_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4PHEL6BE-86f5b6a2d2/screen_shot_2017-03-24_at_3.03.24_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4PHEL6BE-86f5b6a2d2/screen_shot_2017-03-24_at_3.03.24_pm_1024.png",
            "original_w": 1492,
            "original_h": 1164,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F4PHEL6BE/screen_shot_2017-03-24_at_3.03.24_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4PJWL99T",
            "timestamp": 1490389423,
            "name": "Pasted image at 2017_03_24 03_03 PM.png",
            "title": "Pasted image at 2017-03-24, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PJWL99T/pasted_image_at_2017_03_24_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PJWL99T/download/pasted_image_at_2017_03_24_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWL99T-a76eb0583b/pasted_image_at_2017_03_24_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWL99T-a76eb0583b/pasted_image_at_2017_03_24_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWL99T-a76eb0583b/pasted_image_at_2017_03_24_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWL99T-a76eb0583b/pasted_image_at_2017_03_24_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWL99T-a76eb0583b/pasted_image_at_2017_03_24_03_03_pm_1024.png",
            "original_w": 1455,
            "original_h": 898,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F4PJWL99T/pasted_image_at_2017_03_24_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "muscle",
                    "users": [
                        "U1324MZRS",
                        "U2PG17XKJ",
                        "U0ZV9NY93",
                        "U2DU3TZL7",
                        "U1000HJ8H"
                    ],
                    "count": 5
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Q6X159U",
            "timestamp": 1490389406,
            "name": "Pasted image at 2017_03_24 03_03 PM.png",
            "title": "Pasted image at 2017-03-24, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Q6X159U/pasted_image_at_2017_03_24_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Q6X159U/download/pasted_image_at_2017_03_24_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6X159U-ec25ca25fa/pasted_image_at_2017_03_24_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6X159U-ec25ca25fa/pasted_image_at_2017_03_24_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6X159U-ec25ca25fa/pasted_image_at_2017_03_24_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6X159U-ec25ca25fa/pasted_image_at_2017_03_24_03_03_pm_720.png",
            "original_w": 946,
            "original_h": 749,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F4Q6X159U/pasted_image_at_2017_03_24_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1::skin-tone-2",
                    "users": [
                        "U2J6FK5CZ",
                        "U2A6BJ71Q",
                        "U27DJ3JT0",
                        "U2HN6FYRM",
                        "U13FJA80G",
                        "U1000HJ8H"
                    ],
                    "count": 6
                },
                {
                    "name": "trophy",
                    "users": [
                        "U2G4XKRRU",
                        "U27DJ3JT0",
                        "U2PG17XKJ",
                        "U2KRMJ9MM",
                        "U1000HJ8H",
                        "U2CL304CW",
                        "U0ZV9NY93",
                        "U2HN6FYRM",
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 10
                },
                {
                    "name": "tada",
                    "users": [
                        "U2PKVNC87",
                        "U13FJA80G",
                        "U2HN6FYRM",
                        "U2DU3TZL7"
                    ],
                    "count": 4
                },
                {
                    "name": "fiesta_parrot",
                    "users": [
                        "U2J48K6QY",
                        "U2HN6FYRM",
                        "U13FJA80G"
                    ],
                    "count": 3
                },
                {
                    "name": "dog",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Q6WV606",
            "timestamp": 1490389399,
            "name": "Pasted image at 2017_03_24 02_03 PM.png",
            "title": "Pasted image at 2017-03-24, 2:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0BT0NXEY",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Q6WV606/pasted_image_at_2017_03_24_02_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Q6WV606/download/pasted_image_at_2017_03_24_02_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6WV606-c2761f4779/pasted_image_at_2017_03_24_02_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6WV606-c2761f4779/pasted_image_at_2017_03_24_02_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6WV606-c2761f4779/pasted_image_at_2017_03_24_02_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6WV606-c2761f4779/pasted_image_at_2017_03_24_02_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6WV606-c2761f4779/pasted_image_at_2017_03_24_02_03_pm_1024.png",
            "original_w": 2336,
            "original_h": 1715,
            "permalink": "https://appdirect.slack.com/files/ryan.boye/F4Q6WV606/pasted_image_at_2017_03_24_02_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "art",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "lower_left_paintbrush",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4NRSJ0M7",
            "timestamp": 1490389393,
            "name": "Screen Shot 2017-03-24 at 2.02.51 PM.png",
            "title": "Zotyl the AXOLOTL",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4NRSJ0M7/screen_shot_2017-03-24_at_2.02.51_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4NRSJ0M7/download/screen_shot_2017-03-24_at_2.02.51_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSJ0M7-ead1412a92/screen_shot_2017-03-24_at_2.02.51_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSJ0M7-ead1412a92/screen_shot_2017-03-24_at_2.02.51_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSJ0M7-ead1412a92/screen_shot_2017-03-24_at_2.02.51_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSJ0M7-ead1412a92/screen_shot_2017-03-24_at_2.02.51_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSJ0M7-ead1412a92/screen_shot_2017-03-24_at_2.02.51_pm_1024.png",
            "original_w": 1542,
            "original_h": 1376,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F4NRSJ0M7/screen_shot_2017-03-24_at_2.02.51_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4PJWBT5K",
            "timestamp": 1490389391,
            "name": "Screen Shot 2017-03-24 at 3.02.57 PM.png",
            "title": "forgot to feed it",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PJWBT5K/screen_shot_2017-03-24_at_3.02.57_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PJWBT5K/download/screen_shot_2017-03-24_at_3.02.57_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWBT5K-d9accdc79f/screen_shot_2017-03-24_at_3.02.57_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWBT5K-d9accdc79f/screen_shot_2017-03-24_at_3.02.57_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PJWBT5K-d9accdc79f/screen_shot_2017-03-24_at_3.02.57_pm_160.png",
            "original_w": 529,
            "original_h": 439,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F4PJWBT5K/screen_shot_2017-03-24_at_3.02.57_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "zzz",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "skull_and_crossbones",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4PHEAVL4",
            "timestamp": 1490389390,
            "name": "uhhhh!!!.jpg",
            "title": "uhhhh!!!.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PHEAVL4/uhhhh___.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PHEAVL4/download/uhhhh___.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PHEAVL4-3e86bdcfdb/uhhhh____360.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PHEAVL4-3e86bdcfdb/uhhhh____160.jpg",
            "original_w": 400,
            "original_h": 300,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F4PHEAVL4/uhhhh___.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "smile",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Q6WNLDU",
            "timestamp": 1490389384,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Q6WNLDU/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Q6WNLDU/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6WNLDU-cca44ec390/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6WNLDU-cca44ec390/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6WNLDU-cca44ec390/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4Q6WNLDU-cca44ec390/drawing_720.png",
            "original_w": 773,
            "original_h": 614,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F4Q6WNLDU/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "shopping_bags",
                    "users": [
                        "U2PKVNC87",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                },
                {
                    "name": "heart",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "blush",
                    "users": [
                        "U2PG17XKJ"
                    ],
                    "count": 1
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4NRSB9R7",
            "timestamp": 1490389365,
            "name": "Pasted image at 2017_03_24 03_02 PM.png",
            "title": "ummm....",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4NRSB9R7/pasted_image_at_2017_03_24_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4NRSB9R7/download/pasted_image_at_2017_03_24_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSB9R7-412bb07e46/pasted_image_at_2017_03_24_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSB9R7-412bb07e46/pasted_image_at_2017_03_24_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSB9R7-412bb07e46/pasted_image_at_2017_03_24_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSB9R7-412bb07e46/pasted_image_at_2017_03_24_03_02_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4NRSB9R7-412bb07e46/pasted_image_at_2017_03_24_03_02_pm_1024.png",
            "original_w": 1337,
            "original_h": 575,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F4NRSB9R7/pasted_image_at_2017_03_24_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "car",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4PG9EH6W",
            "timestamp": 1490389364,
            "name": "Screen Shot 2017-03-24 at 3.02.28 PM.png",
            "title": "Screen Shot 2017-03-24 at 3.02.28 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PG9EH6W/screen_shot_2017-03-24_at_3.02.28_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PG9EH6W/download/screen_shot_2017-03-24_at_3.02.28_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PG9EH6W-2c27d7d37a/screen_shot_2017-03-24_at_3.02.28_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4PG9EH6W-2c27d7d37a/screen_shot_2017-03-24_at_3.02.28_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PG9EH6W-2c27d7d37a/screen_shot_2017-03-24_at_3.02.28_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4PG9EH6W-2c27d7d37a/screen_shot_2017-03-24_at_3.02.28_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4PG9EH6W-2c27d7d37a/screen_shot_2017-03-24_at_3.02.28_pm_1024.png",
            "original_w": 1094,
            "original_h": 689,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F4PG9EH6W/screen_shot_2017-03-24_at_3.02.28_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4PG9BZJ6",
            "timestamp": 1490389350,
            "name": "Drawing (1).png",
            "title": "Drawing (1).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2J48K6QY",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4PG9BZJ6/drawing__1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4PG9BZJ6/download/drawing__1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4PG9BZJ6-9fcdee4a8f/drawing__1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4PG9BZJ6-9fcdee4a8f/drawing__1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4PG9BZJ6-9fcdee4a8f/drawing__1__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4PG9BZJ6-9fcdee4a8f/drawing__1__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4PG9BZJ6-9fcdee4a8f/drawing__1__1024.png",
            "original_w": 1484,
            "original_h": 696,
            "permalink": "https://appdirect.slack.com/files/mike.mahpoy/F4PG9BZJ6/drawing__1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "hankey",
                    "users": [
                        "U2PG17XKJ",
                        "U2HN6FYRM",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4NQW9BS4",
            "timestamp": 1490389339,
            "name": "Drawing (4).jpeg",
            "title": "Drawing (4).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4NQW9BS4/drawing__4_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4NQW9BS4/download/drawing__4_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4NQW9BS4-0dbec1c5e7/drawing__4__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4NQW9BS4-0dbec1c5e7/drawing__4__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4NQW9BS4-0dbec1c5e7/drawing__4__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4NQW9BS4-0dbec1c5e7/drawing__4__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4NQW9BS4-0dbec1c5e7/drawing__4__1024.jpg",
            "original_w": 1141,
            "original_h": 588,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F4NQW9BS4/drawing__4_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4Q7854R5",
            "timestamp": 1490389338,
            "name": "Pasted image at 2017_03_24 03_02 PM.png",
            "title": "Pasted image at 2017-03-24, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4Q7854R5/pasted_image_at_2017_03_24_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4Q7854R5/download/pasted_image_at_2017_03_24_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4Q7854R5-9718db439e/pasted_image_at_2017_03_24_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4Q7854R5-9718db439e/pasted_image_at_2017_03_24_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4Q7854R5-9718db439e/pasted_image_at_2017_03_24_03_02_pm_160.png",
            "original_w": 574,
            "original_h": 531,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F4Q7854R5/pasted_image_at_2017_03_24_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pokemonball",
                    "users": [
                        "U2A6A9FR8",
                        "U1324MZRS",
                        "U2CL304CW",
                        "U2KRMJ9MM",
                        "U0ZV9NY93",
                        "U2DU3TZL7",
                        "U1000HJ8H",
                        "U2G4XKRRU"
                    ],
                    "count": 8
                },
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4L79PA1J",
            "timestamp": 1489784739,
            "name": "Pasted image at 2017_03_17 03_05 PM.png",
            "title": "Pasted image at 2017-03-17, 3:05 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L79PA1J/pasted_image_at_2017_03_17_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L79PA1J/download/pasted_image_at_2017_03_17_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L79PA1J-883b1e9144/pasted_image_at_2017_03_17_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L79PA1J-883b1e9144/pasted_image_at_2017_03_17_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L79PA1J-883b1e9144/pasted_image_at_2017_03_17_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4L79PA1J-883b1e9144/pasted_image_at_2017_03_17_03_05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4L79PA1J-883b1e9144/pasted_image_at_2017_03_17_03_05_pm_1024.png",
            "original_w": 750,
            "original_h": 1313,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F4L79PA1J/pasted_image_at_2017_03_17_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pretzel",
                    "users": [
                        "U0ZV9NY93",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "timer_clock",
                    "users": [
                        "U2PG17XKJ",
                        "U2DU3TZL7",
                        "U0J6ZJTDM",
                        "U13FJA80G"
                    ],
                    "count": 4
                },
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4LSHTQ15",
            "timestamp": 1489784703,
            "name": "Drawing(10).png",
            "title": "Drawing(10).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4LSHTQ15/drawing_10_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4LSHTQ15/download/drawing_10_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4LSHTQ15-96d87ef5c6/drawing_10__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4LSHTQ15-96d87ef5c6/drawing_10__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4LSHTQ15-96d87ef5c6/drawing_10__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4LSHTQ15-96d87ef5c6/drawing_10__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4LSHTQ15-96d87ef5c6/drawing_10__1024.png",
            "original_w": 1181,
            "original_h": 636,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F4LSHTQ15/drawing_10_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fire",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U2A658R7U"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4KESB71N",
            "timestamp": 1489784698,
            "name": "Screen Shot 2017-03-17 at 3.03.58 PM.png",
            "title": "Screen Shot 2017-03-17 at 3.03.58 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4KESB71N/screen_shot_2017-03-17_at_3.03.58_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4KESB71N/download/screen_shot_2017-03-17_at_3.03.58_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4KESB71N-5cf07ca7c9/screen_shot_2017-03-17_at_3.03.58_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4KESB71N-5cf07ca7c9/screen_shot_2017-03-17_at_3.03.58_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4KESB71N-5cf07ca7c9/screen_shot_2017-03-17_at_3.03.58_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4KESB71N-5cf07ca7c9/screen_shot_2017-03-17_at_3.03.58_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4KESB71N-5cf07ca7c9/screen_shot_2017-03-17_at_3.03.58_pm_1024.png",
            "original_w": 634,
            "original_h": 1130,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F4KESB71N/screen_shot_2017-03-17_at_3.03.58_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "the_horns",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "scissors",
                    "users": [
                        "U2PKVNC87"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4L78UEJY",
            "timestamp": 1489784645,
            "name": "Pasted image at 2017_03_17 03_03 PM.png",
            "title": "marry mole day",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L78UEJY/pasted_image_at_2017_03_17_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L78UEJY/download/pasted_image_at_2017_03_17_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L78UEJY-9c19bc9222/pasted_image_at_2017_03_17_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L78UEJY-9c19bc9222/pasted_image_at_2017_03_17_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L78UEJY-9c19bc9222/pasted_image_at_2017_03_17_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4L78UEJY-9c19bc9222/pasted_image_at_2017_03_17_03_03_pm_720.png",
            "original_w": 606,
            "original_h": 735,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F4L78UEJY/pasted_image_at_2017_03_17_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "star2",
                    "users": [
                        "U0ZV9NY93",
                        "U2CL304CW",
                        "U0N226FV4",
                        "U2DU3TZL7",
                        "U13FJA80G",
                        "U2PG17XKJ",
                        "U08P10WPQ"
                    ],
                    "count": 7
                }
            ]
        },
        {
            "id": "F4KFMB1RP",
            "timestamp": 1489784638,
            "name": "Pasted image at 2017_03_17 03_03 PM.png",
            "title": "Pasted image at 2017-03-17, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4KFMB1RP/pasted_image_at_2017_03_17_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4KFMB1RP/download/pasted_image_at_2017_03_17_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4KFMB1RP-b1e45054cc/pasted_image_at_2017_03_17_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4KFMB1RP-b1e45054cc/pasted_image_at_2017_03_17_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4KFMB1RP-b1e45054cc/pasted_image_at_2017_03_17_03_03_pm_160.png",
            "original_w": 610,
            "original_h": 198,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F4KFMB1RP/pasted_image_at_2017_03_17_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "star",
                    "users": [
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "star2",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4L64UDK4",
            "timestamp": 1489784631,
            "name": "Screen Shot 2017-03-17 at 3.03.33 PM.png",
            "title": "Screen Shot 2017-03-17 at 3.03.33 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L64UDK4/screen_shot_2017-03-17_at_3.03.33_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L64UDK4/download/screen_shot_2017-03-17_at_3.03.33_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L64UDK4-750b857433/screen_shot_2017-03-17_at_3.03.33_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L64UDK4-750b857433/screen_shot_2017-03-17_at_3.03.33_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L64UDK4-750b857433/screen_shot_2017-03-17_at_3.03.33_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4L64UDK4-750b857433/screen_shot_2017-03-17_at_3.03.33_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4L64UDK4-750b857433/screen_shot_2017-03-17_at_3.03.33_pm_1024.png",
            "original_w": 1058,
            "original_h": 694,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F4L64UDK4/screen_shot_2017-03-17_at_3.03.33_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "four_leaf_clover",
                    "users": [
                        "U0ZV27VBQ",
                        "U1324MZRS",
                        "U2DU3TZL7",
                        "U2PG17XKJ",
                        "U2D7F59RU",
                        "U2HN6FYRM",
                        "U2CL304CW",
                        "U0J6ZJTDM",
                        "U27DJ3JT0"
                    ],
                    "count": 9
                },
                {
                    "name": "tophat",
                    "users": [
                        "U2PG17XKJ",
                        "U27DJ3JT0",
                        "U13FJA80G",
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 5
                },
                {
                    "name": "trophy",
                    "users": [
                        "U0ZV9NY93",
                        "U27DJ3JT0",
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 4
                },
                {
                    "name": "beer",
                    "users": [
                        "U0ZV9NY93",
                        "U27DJ3JT0"
                    ],
                    "count": 2
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "+1::skin-tone-2",
                    "users": [
                        "U2J6FK5CZ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4L64TR6E",
            "timestamp": 1489784627,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0N226FV4",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L64TR6E/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L64TR6E/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L64TR6E-16d5c6f3ac/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L64TR6E-16d5c6f3ac/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L64TR6E-16d5c6f3ac/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4L64TR6E-16d5c6f3ac/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4L64TR6E-16d5c6f3ac/drawing_1024.png",
            "original_w": 1055,
            "original_h": 556,
            "permalink": "https://appdirect.slack.com/files/ken.friesen/F4L64TR6E/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc4L8RGA1K",
                "timestamp": 1489784627,
                "user": "U0N226FV4",
                "is_intro": true,
                "comment": "Star With a Mole on it's nose."
            },
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U1324MZRS",
                        "U2HN6FYRM",
                        "U0N226FV4"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4LS5HWMU",
            "timestamp": 1489784615,
            "name": "Drawing.png",
            "title": "star nosed mole",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U3L6JARDE",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4LS5HWMU/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4LS5HWMU/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4LS5HWMU-2d3abc65a3/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4LS5HWMU-2d3abc65a3/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4LS5HWMU-2d3abc65a3/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4LS5HWMU-2d3abc65a3/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4LS5HWMU-2d3abc65a3/drawing_1024.png",
            "original_w": 2076,
            "original_h": 1088,
            "permalink": "https://appdirect.slack.com/files/asmi.joshi/F4LS5HWMU/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "tada",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4KFM6GRF",
            "timestamp": 1489784611,
            "name": "Pasted image at 2017_03_17 03_03 PM.png",
            "title": "star nosed mole",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4KFM6GRF/pasted_image_at_2017_03_17_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4KFM6GRF/download/pasted_image_at_2017_03_17_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4KFM6GRF-0ea20ccc75/pasted_image_at_2017_03_17_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4KFM6GRF-0ea20ccc75/pasted_image_at_2017_03_17_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4KFM6GRF-0ea20ccc75/pasted_image_at_2017_03_17_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4KFM6GRF-0ea20ccc75/pasted_image_at_2017_03_17_03_03_pm_720.png",
            "original_w": 919,
            "original_h": 413,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F4KFM6GRF/pasted_image_at_2017_03_17_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "point_up",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "rat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4LSH7D0X",
            "timestamp": 1489784608,
            "name": "Screen Shot 2017-03-17 at 3.03.07 PM.png",
            "title": "Screen Shot 2017-03-17 at 3.03.07 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4LSH7D0X/screen_shot_2017-03-17_at_3.03.07_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4LSH7D0X/download/screen_shot_2017-03-17_at_3.03.07_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4LSH7D0X-808073ad25/screen_shot_2017-03-17_at_3.03.07_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4LSH7D0X-808073ad25/screen_shot_2017-03-17_at_3.03.07_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4LSH7D0X-808073ad25/screen_shot_2017-03-17_at_3.03.07_pm_160.png",
            "original_w": 684,
            "original_h": 499,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F4LSH7D0X/screen_shot_2017-03-17_at_3.03.07_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "star",
                    "users": [
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4L8RC87P",
            "timestamp": 1489784607,
            "name": "star-nosed-mole.png",
            "title": "star-nosed-mole.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L8RC87P/star-nosed-mole.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L8RC87P/download/star-nosed-mole.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L8RC87P-136cce9fda/star-nosed-mole_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L8RC87P-136cce9fda/star-nosed-mole_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L8RC87P-136cce9fda/star-nosed-mole_160.png",
            "original_w": 600,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F4L8RC87P/star-nosed-mole.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "beer",
                    "users": [
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4KFM524R",
            "timestamp": 1489784604,
            "name": "Screen Shot 2017-03-17 at 3.03.13 PM.png",
            "title": "Screen Shot 2017-03-17 at 3.03.13 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4KFM524R/screen_shot_2017-03-17_at_3.03.13_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4KFM524R/download/screen_shot_2017-03-17_at_3.03.13_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4KFM524R-16ff33b1c8/screen_shot_2017-03-17_at_3.03.13_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4KFM524R-16ff33b1c8/screen_shot_2017-03-17_at_3.03.13_pm_160.png",
            "original_w": 369,
            "original_h": 393,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F4KFM524R/screen_shot_2017-03-17_at_3.03.13_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "slightly_smiling_face",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "hankey",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4L64K7M0",
            "timestamp": 1489784593,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L64K7M0/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L64K7M0/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L64K7M0-52da01e5e5/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L64K7M0-52da01e5e5/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L64K7M0-52da01e5e5/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4L64K7M0-52da01e5e5/drawing_720.png",
            "original_w": 721,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F4L64K7M0/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "lock",
                    "users": [
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "joy",
                    "users": [
                        "U2HN6FYRM",
                        "U08P10WPQ",
                        "U2A658R7U"
                    ],
                    "count": 3
                },
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4L44164B",
            "timestamp": 1489784592,
            "name": "Screen Shot 2017-03-17 at 3.02.58 PM.png",
            "title": "Screen Shot 2017-03-17 at 3.02.58 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L44164B/screen_shot_2017-03-17_at_3.02.58_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L44164B/download/screen_shot_2017-03-17_at_3.02.58_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L44164B-89d9b6070e/screen_shot_2017-03-17_at_3.02.58_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L44164B-89d9b6070e/screen_shot_2017-03-17_at_3.02.58_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L44164B-89d9b6070e/screen_shot_2017-03-17_at_3.02.58_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4L44164B-89d9b6070e/screen_shot_2017-03-17_at_3.02.58_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4L44164B-89d9b6070e/screen_shot_2017-03-17_at_3.02.58_pm_1024.png",
            "original_w": 2412,
            "original_h": 1572,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F4L44164B/screen_shot_2017-03-17_at_3.02.58_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "see_no_evil",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4L64E5J6",
            "timestamp": 1489784572,
            "name": "Drawing (1).png",
            "title": "Drawing (1).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2J48K6QY",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L64E5J6/drawing__1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L64E5J6/download/drawing__1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L64E5J6-bb8dcad42c/drawing__1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L64E5J6-bb8dcad42c/drawing__1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L64E5J6-bb8dcad42c/drawing__1__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4L64E5J6-bb8dcad42c/drawing__1__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4L64E5J6-bb8dcad42c/drawing__1__1024.png",
            "original_w": 1484,
            "original_h": 696,
            "permalink": "https://appdirect.slack.com/files/mike.mahpoy/F4L64E5J6/drawing__1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "hankey",
                    "users": [
                        "U2PG17XKJ",
                        "U2DU3TZL7",
                        "U2HN6FYRM",
                        "U3L6JARDE",
                        "U08P10WPQ"
                    ],
                    "count": 5
                },
                {
                    "name": "joy",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "smile",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4L64CTLJ",
            "timestamp": 1489784564,
            "name": "Image uploaded from iOS.jpg",
            "title": "Image uploaded from iOS",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0J6ZJTDM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L64CTLJ/image_uploaded_from_ios.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L64CTLJ/download/image_uploaded_from_ios.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L64CTLJ-219cf886cf/image_uploaded_from_ios_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L64CTLJ-219cf886cf/image_uploaded_from_ios_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L64CTLJ-219cf886cf/image_uploaded_from_ios_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4L64CTLJ-219cf886cf/image_uploaded_from_ios_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4L64CTLJ-219cf886cf/image_uploaded_from_ios_1024.jpg",
            "original_w": 2048,
            "original_h": 1536,
            "permalink": "https://appdirect.slack.com/files/arjun.krishna/F4L64CTLJ/image_uploaded_from_ios.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4LSGR65D",
            "timestamp": 1489784564,
            "name": "Pasted image at 2017_03_17 03_02 PM.png",
            "title": "Pasted image at 2017-03-17, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4LSGR65D/pasted_image_at_2017_03_17_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4LSGR65D/download/pasted_image_at_2017_03_17_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4LSGR65D-748833a831/pasted_image_at_2017_03_17_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4LSGR65D-748833a831/pasted_image_at_2017_03_17_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4LSGR65D-748833a831/pasted_image_at_2017_03_17_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4LSGR65D-748833a831/pasted_image_at_2017_03_17_03_02_pm_720.png",
            "original_w": 894,
            "original_h": 447,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F4LSGR65D/pasted_image_at_2017_03_17_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "star",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "star2",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4L647LAE",
            "timestamp": 1489784536,
            "name": "Pasted image at 2017_03_17 03_02 PM.png",
            "title": "Pasted image at 2017-03-17, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L647LAE/pasted_image_at_2017_03_17_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L647LAE/download/pasted_image_at_2017_03_17_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L647LAE-38075b9cc4/pasted_image_at_2017_03_17_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L647LAE-38075b9cc4/pasted_image_at_2017_03_17_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L647LAE-38075b9cc4/pasted_image_at_2017_03_17_03_02_pm_160.png",
            "original_w": 698,
            "original_h": 308,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F4L647LAE/pasted_image_at_2017_03_17_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "star2",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "star",
                    "users": [
                        "U2DU3TZL7",
                        "U2HN6FYRM",
                        "U0B52QL07"
                    ],
                    "count": 3
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4KER22RW",
            "timestamp": 1489784533,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27D07RKN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4KER22RW/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4KER22RW/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4KER22RW-bc998f7db9/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4KER22RW-bc998f7db9/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4KER22RW-bc998f7db9/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4KER22RW-bc998f7db9/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4KER22RW-bc998f7db9/drawing_1024.png",
            "original_w": 1695,
            "original_h": 940,
            "permalink": "https://appdirect.slack.com/files/jernej.klancic/F4KER22RW/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "star",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "night_with_stars",
                    "users": [
                        "U08P10WPQ",
                        "U0N226FV4"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4L644MMG",
            "timestamp": 1489784532,
            "name": "Pasted image at 2017_03_17 03_02 PM.png",
            "title": "NOPE",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4L644MMG/pasted_image_at_2017_03_17_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4L644MMG/download/pasted_image_at_2017_03_17_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4L644MMG-3e420c000e/pasted_image_at_2017_03_17_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4L644MMG-3e420c000e/pasted_image_at_2017_03_17_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4L644MMG-3e420c000e/pasted_image_at_2017_03_17_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4L644MMG-3e420c000e/pasted_image_at_2017_03_17_03_02_pm_720.png",
            "original_w": 755,
            "original_h": 679,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F4L644MMG/pasted_image_at_2017_03_17_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U2DU3TZL7",
                        "U2HN6FYRM",
                        "U2PG17XKJ",
                        "U08P10WPQ",
                        "U2J6FK5CZ",
                        "U2G4XKRRU"
                    ],
                    "count": 8
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4KEQSAM6",
            "timestamp": 1489784514,
            "name": "Drawing (3).jpeg",
            "title": "Not sure what this is but either way its not good",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4KEQSAM6/drawing__3_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4KEQSAM6/download/drawing__3_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4KEQSAM6-184c1851b5/drawing__3__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4KEQSAM6-184c1851b5/drawing__3__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4KEQSAM6-184c1851b5/drawing__3__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4KEQSAM6-184c1851b5/drawing__3__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4KEQSAM6-184c1851b5/drawing__3__1024.jpg",
            "original_w": 1695,
            "original_h": 900,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F4KEQSAM6/drawing__3_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4KFL4L0Z",
            "timestamp": 1489784481,
            "name": "Screen Shot 2017-03-17 at 3.01.03 PM.png",
            "title": "Screen Shot 2017-03-17 at 3.01.03 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4KFL4L0Z/screen_shot_2017-03-17_at_3.01.03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4KFL4L0Z/download/screen_shot_2017-03-17_at_3.01.03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4KFL4L0Z-222ca59064/screen_shot_2017-03-17_at_3.01.03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4KFL4L0Z-222ca59064/screen_shot_2017-03-17_at_3.01.03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4KFL4L0Z-222ca59064/screen_shot_2017-03-17_at_3.01.03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4KFL4L0Z-222ca59064/screen_shot_2017-03-17_at_3.01.03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4KFL4L0Z-222ca59064/screen_shot_2017-03-17_at_3.01.03_pm_1024.png",
            "original_w": 2170,
            "original_h": 1270,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F4KFL4L0Z/screen_shot_2017-03-17_at_3.01.03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "four_leaf_clover",
                    "users": [
                        "U2DU3TZL7",
                        "U2D7F59RU",
                        "U08P10WPQ"
                    ],
                    "count": 3
                },
                {
                    "name": "slightly_smiling_face",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "rage1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4GTU9P0U",
            "timestamp": 1489184285,
            "name": "Pasted image at 2017_03_10 03_17 PM.png",
            "title": "Never too late to submit",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GTU9P0U/pasted_image_at_2017_03_10_03_17_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GTU9P0U/download/pasted_image_at_2017_03_10_03_17_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GTU9P0U-29d71de8a6/pasted_image_at_2017_03_10_03_17_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GTU9P0U-29d71de8a6/pasted_image_at_2017_03_10_03_17_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GTU9P0U-29d71de8a6/pasted_image_at_2017_03_10_03_17_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4GTU9P0U-29d71de8a6/pasted_image_at_2017_03_10_03_17_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4GTU9P0U-29d71de8a6/pasted_image_at_2017_03_10_03_17_pm_1024.png",
            "original_w": 1310,
            "original_h": 901,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F4GTU9P0U/pasted_image_at_2017_03_10_03_17_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "snowflake",
                    "users": [
                        "U2DU3TZL7",
                        "U2G4XKRRU"
                    ],
                    "count": 2
                },
                {
                    "name": "tophat",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "heart_eyes_cat",
                    "users": [
                        "U0ZV9NY93",
                        "U2G1VV7AR"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4HH6A6CW",
            "timestamp": 1489183609,
            "name": "raw.gif",
            "title": "raw.gif",
            "mimetype": "image/gif",
            "filetype": "gif",
            "pretty_type": "GIF",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4HH6A6CW/raw.gif",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4HH6A6CW/download/raw.gif",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4HH6A6CW-a98db25ee9/raw_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4HH6A6CW-a98db25ee9/raw_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4HH6A6CW-a98db25ee9/raw_160.png",
            "thumb_360_gif": "https://files.slack.com/files-tmb/T04V96SJW-F4HH6A6CW-a98db25ee9/raw_360.gif",
            "thumb_480_gif": "https://files.slack.com/files-tmb/T04V96SJW-F4HH6A6CW-a98db25ee9/raw_480.gif",
            "original_w": 498,
            "original_h": 304,
            "deanimate_gif": "https://files.slack.com/files-tmb/T04V96SJW-F4HH6A6CW-a98db25ee9/raw_deanimate_gif.png",
            "permalink": "https://appdirect.slack.com/files/colin.chong/F4HH6A6CW/raw.gif",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F4HH5QGLW",
            "timestamp": 1489183539,
            "name": "Pasted image at 2017_03_10 03_05 PM.png",
            "title": "Manatee!",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4HH5QGLW/pasted_image_at_2017_03_10_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4HH5QGLW/download/pasted_image_at_2017_03_10_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4HH5QGLW-118634aaae/pasted_image_at_2017_03_10_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4HH5QGLW-118634aaae/pasted_image_at_2017_03_10_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4HH5QGLW-118634aaae/pasted_image_at_2017_03_10_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4HH5QGLW-118634aaae/pasted_image_at_2017_03_10_03_05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4HH5QGLW-118634aaae/pasted_image_at_2017_03_10_03_05_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F4HH5QGLW/pasted_image_at_2017_03_10_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "alarm_clock",
                    "users": [
                        "U2PG17XKJ",
                        "U2G1VV7AR",
                        "U1000HJ8H"
                    ],
                    "count": 3
                },
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4G5SGZLY",
            "timestamp": 1489183533,
            "name": "Drawing(9).png",
            "title": "Drawing(9).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4G5SGZLY/drawing_9_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4G5SGZLY/download/drawing_9_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4G5SGZLY-3079f32ca0/drawing_9__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4G5SGZLY-3079f32ca0/drawing_9__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4G5SGZLY-3079f32ca0/drawing_9__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4G5SGZLY-3079f32ca0/drawing_9__720.png",
            "original_w": 996,
            "original_h": 646,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F4G5SGZLY/drawing_9_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "scream",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 3
                },
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4GQJBHNX",
            "timestamp": 1489183474,
            "name": "Pasted image at 2017_03_10 03_04 PM.png",
            "title": "Pasted image at 2017-03-10, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GQJBHNX/pasted_image_at_2017_03_10_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GQJBHNX/download/pasted_image_at_2017_03_10_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJBHNX-0331820233/pasted_image_at_2017_03_10_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJBHNX-0331820233/pasted_image_at_2017_03_10_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJBHNX-0331820233/pasted_image_at_2017_03_10_03_04_pm_160.png",
            "original_w": 573,
            "original_h": 376,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F4GQJBHNX/pasted_image_at_2017_03_10_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4G5S2XJ4",
            "timestamp": 1489183472,
            "name": "Screen Shot 2017-03-10 at 3.03.57 PM.png",
            "title": "Screen Shot 2017-03-10 at 3.03.57 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4G5S2XJ4/screen_shot_2017-03-10_at_3.03.57_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4G5S2XJ4/download/screen_shot_2017-03-10_at_3.03.57_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4G5S2XJ4-e6965a4c74/screen_shot_2017-03-10_at_3.03.57_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4G5S2XJ4-e6965a4c74/screen_shot_2017-03-10_at_3.03.57_pm_160.png",
            "original_w": 475,
            "original_h": 306,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F4G5S2XJ4/screen_shot_2017-03-10_at_3.03.57_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "smile",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4HHGEDP1",
            "timestamp": 1489183461,
            "name": "Screen Shot 2017-03-10 at 3.03.22 PM.png",
            "title": "Screen Shot 2017-03-10 at 3.03.22 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4HHGEDP1/screen_shot_2017-03-10_at_3.03.22_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4HHGEDP1/download/screen_shot_2017-03-10_at_3.03.22_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4HHGEDP1-1cb66af336/screen_shot_2017-03-10_at_3.03.22_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4HHGEDP1-1cb66af336/screen_shot_2017-03-10_at_3.03.22_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4HHGEDP1-1cb66af336/screen_shot_2017-03-10_at_3.03.22_pm_160.png",
            "original_w": 485,
            "original_h": 572,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F4HHGEDP1/screen_shot_2017-03-10_at_3.03.22_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc4GSJDFT4",
                "timestamp": 1489183461,
                "user": "U29PKD0NN",
                "is_intro": true,
                "comment": "\u201cThe world is, of course, nothing but our conception of it.\u201d"
            },
            "reactions": [
                {
                    "name": "thinking_face",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4GV54B7F",
            "timestamp": 1489183448,
            "name": "Pasted image at 2017_03_10 03_04 PM.png",
            "title": "manatee",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GV54B7F/pasted_image_at_2017_03_10_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GV54B7F/download/pasted_image_at_2017_03_10_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GV54B7F-3682a6b070/pasted_image_at_2017_03_10_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GV54B7F-3682a6b070/pasted_image_at_2017_03_10_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GV54B7F-3682a6b070/pasted_image_at_2017_03_10_03_04_pm_160.png",
            "original_w": 640,
            "original_h": 631,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F4GV54B7F/pasted_image_at_2017_03_10_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "programmer",
                    "users": [
                        "U1324MZRS",
                        "U2PG17XKJ",
                        "U13FJA80G",
                        "U0ZV9NY93"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4GQJ3TEX",
            "timestamp": 1489183448,
            "name": "Screen Shot 2017-03-10 at 3.03.52 PM.png",
            "title": "Screen Shot 2017-03-10 at 3.03.52 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GQJ3TEX/screen_shot_2017-03-10_at_3.03.52_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GQJ3TEX/download/screen_shot_2017-03-10_at_3.03.52_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJ3TEX-df59af752c/screen_shot_2017-03-10_at_3.03.52_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJ3TEX-df59af752c/screen_shot_2017-03-10_at_3.03.52_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJ3TEX-df59af752c/screen_shot_2017-03-10_at_3.03.52_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJ3TEX-df59af752c/screen_shot_2017-03-10_at_3.03.52_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJ3TEX-df59af752c/screen_shot_2017-03-10_at_3.03.52_pm_1024.png",
            "original_w": 1974,
            "original_h": 1276,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F4GQJ3TEX/screen_shot_2017-03-10_at_3.03.52_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "point_up",
                    "users": [
                        "U29PKD0NN",
                        "U13GTGD7G",
                        "U2G1VV7AR",
                        "U13FJA80G"
                    ],
                    "count": 4
                },
                {
                    "name": "nerd_face",
                    "users": [
                        "U2HN6FYRM",
                        "U27DJ3JT0",
                        "U13FJA80G"
                    ],
                    "count": 3
                },
                {
                    "name": "laughing",
                    "users": [
                        "U2QUK00RK",
                        "U13FJA80G",
                        "U2G4XKRRU"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4G6LT01X",
            "timestamp": 1489183434,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4G6LT01X/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4G6LT01X/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4G6LT01X-2c8c9f3711/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4G6LT01X-2c8c9f3711/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4G6LT01X-2c8c9f3711/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4G6LT01X-2c8c9f3711/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4G6LT01X-2c8c9f3711/drawing_1024.jpg",
            "original_w": 1215,
            "original_h": 716,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F4G6LT01X/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "camera_with_flash",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4GQJ0R19",
            "timestamp": 1489183433,
            "name": "Screen Shot 2017-03-10 at 3.03.09 PM.png",
            "title": "Mr.ManaTee.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GQJ0R19/screen_shot_2017-03-10_at_3.03.09_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GQJ0R19/download/screen_shot_2017-03-10_at_3.03.09_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJ0R19-532cde374e/screen_shot_2017-03-10_at_3.03.09_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJ0R19-532cde374e/screen_shot_2017-03-10_at_3.03.09_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJ0R19-532cde374e/screen_shot_2017-03-10_at_3.03.09_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJ0R19-532cde374e/screen_shot_2017-03-10_at_3.03.09_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4GQJ0R19-532cde374e/screen_shot_2017-03-10_at_3.03.09_pm_1024.png",
            "original_w": 1380,
            "original_h": 983,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F4GQJ0R19/screen_shot_2017-03-10_at_3.03.09_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U2CL304CW",
                        "U2PG17XKJ",
                        "U2A6BJ71Q",
                        "U0ZV9NY93",
                        "U27DJ3JT0",
                        "U1000HJ8H",
                        "U13FJA80G",
                        "U29PKD0NN",
                        "U2DU3TZL7",
                        "U1324MZRS"
                    ],
                    "count": 10
                },
                {
                    "name": "tada",
                    "users": [
                        "U27DJ3JT0",
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "chains",
                    "users": [
                        "U2LRV79LN",
                        "U13FJA80G",
                        "U2DU3TZL7",
                        "U1324MZRS"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4GV4T55K",
            "timestamp": 1489183412,
            "name": "Screen Shot 2017-03-10 at 3.03.00 PM.png",
            "title": "Screen Shot 2017-03-10 at 3.03.00 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GV4T55K/screen_shot_2017-03-10_at_3.03.00_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GV4T55K/download/screen_shot_2017-03-10_at_3.03.00_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GV4T55K-502d0dbcad/screen_shot_2017-03-10_at_3.03.00_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GV4T55K-502d0dbcad/screen_shot_2017-03-10_at_3.03.00_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GV4T55K-502d0dbcad/screen_shot_2017-03-10_at_3.03.00_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4GV4T55K-502d0dbcad/screen_shot_2017-03-10_at_3.03.00_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4GV4T55K-502d0dbcad/screen_shot_2017-03-10_at_3.03.00_pm_1024.png",
            "original_w": 1259,
            "original_h": 776,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F4GV4T55K/screen_shot_2017-03-10_at_3.03.00_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc4GQHTFH9",
                "timestamp": 1489183412,
                "user": "U21BYUQ1Z",
                "is_intro": true,
                "comment": "A little green in the water"
            },
            "reactions": [
                {
                    "name": "green_heart",
                    "users": [
                        "U1324MZRS",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4HH4QG94",
            "timestamp": 1489183409,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U47UK2SN6",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4HH4QG94/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4HH4QG94/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4QG94-b6e4b33934/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4QG94-b6e4b33934/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4QG94-b6e4b33934/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4QG94-b6e4b33934/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4QG94-b6e4b33934/drawing_1024.png",
            "original_w": 1215,
            "original_h": 650,
            "permalink": "https://appdirect.slack.com/files/brenna.devlin/F4HH4QG94/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4GQHRYUB",
            "timestamp": 1489183408,
            "name": "Pasted image at 2017_03_10 03_03 PM.png",
            "title": "Pasted image at 2017-03-10, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GQHRYUB/pasted_image_at_2017_03_10_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GQHRYUB/download/pasted_image_at_2017_03_10_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHRYUB-dccd050988/pasted_image_at_2017_03_10_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHRYUB-dccd050988/pasted_image_at_2017_03_10_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHRYUB-dccd050988/pasted_image_at_2017_03_10_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHRYUB-dccd050988/pasted_image_at_2017_03_10_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHRYUB-dccd050988/pasted_image_at_2017_03_10_03_03_pm_1024.png",
            "original_w": 1407,
            "original_h": 848,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F4GQHRYUB/pasted_image_at_2017_03_10_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "thinking_face",
                    "users": [
                        "U2PG17XKJ",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4G6LN857",
            "timestamp": 1489183406,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2J48K6QY",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4G6LN857/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4G6LN857/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4G6LN857-3cde9c4d56/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4G6LN857-3cde9c4d56/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4G6LN857-3cde9c4d56/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4G6LN857-3cde9c4d56/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4G6LN857-3cde9c4d56/drawing_1024.png",
            "original_w": 1530,
            "original_h": 786,
            "permalink": "https://appdirect.slack.com/files/mike.mahpoy/F4G6LN857/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2HN6FYRM",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "fried_shrimp",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "hankey",
                    "users": [
                        "U2PG17XKJ",
                        "U13FJA80G",
                        "U2G4XKRRU",
                        "U08P10WPQ"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4HH4PN6S",
            "timestamp": 1489183404,
            "name": "Pasted image at 2017_03_10 03_03 PM.png",
            "title": "MANATEEEEE",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4HH4PN6S/pasted_image_at_2017_03_10_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4HH4PN6S/download/pasted_image_at_2017_03_10_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4PN6S-241245b614/pasted_image_at_2017_03_10_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4PN6S-241245b614/pasted_image_at_2017_03_10_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4PN6S-241245b614/pasted_image_at_2017_03_10_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4PN6S-241245b614/pasted_image_at_2017_03_10_03_03_pm_720.png",
            "original_w": 737,
            "original_h": 425,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F4HH4PN6S/pasted_image_at_2017_03_10_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4HHFT5ST",
            "timestamp": 1489183395,
            "name": "Screen Shot 2017-03-10 at 3.02.44 PM.png",
            "title": "Screen Shot 2017-03-10 at 3.02.44 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4HHFT5ST/screen_shot_2017-03-10_at_3.02.44_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4HHFT5ST/download/screen_shot_2017-03-10_at_3.02.44_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4HHFT5ST-e87a3fa5db/screen_shot_2017-03-10_at_3.02.44_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4HHFT5ST-e87a3fa5db/screen_shot_2017-03-10_at_3.02.44_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4HHFT5ST-e87a3fa5db/screen_shot_2017-03-10_at_3.02.44_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4HHFT5ST-e87a3fa5db/screen_shot_2017-03-10_at_3.02.44_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4HHFT5ST-e87a3fa5db/screen_shot_2017-03-10_at_3.02.44_pm_1024.png",
            "original_w": 1664,
            "original_h": 1250,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F4HHFT5ST/screen_shot_2017-03-10_at_3.02.44_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "appdirect",
                    "users": [
                        "U2CL304CW",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "pig_nose",
                    "users": [
                        "U1324MZRS",
                        "U2PG17XKJ",
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4HH4G7E2",
            "timestamp": 1489183385,
            "name": "manatee.png",
            "title": "manatee.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4HH4G7E2/manatee.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4HH4G7E2/download/manatee.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4G7E2-55f6aad56f/manatee_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4G7E2-55f6aad56f/manatee_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4G7E2-55f6aad56f/manatee_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4HH4G7E2-55f6aad56f/manatee_720.png",
            "original_w": 800,
            "original_h": 800,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F4HH4G7E2/manatee.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4GV4H7T7",
            "timestamp": 1489183377,
            "name": "Screen Shot 2017-03-10 at 3.02.39 PM.png",
            "title": "thing",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GV4H7T7/screen_shot_2017-03-10_at_3.02.39_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GV4H7T7/download/screen_shot_2017-03-10_at_3.02.39_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GV4H7T7-6271fff5d1/screen_shot_2017-03-10_at_3.02.39_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GV4H7T7-6271fff5d1/screen_shot_2017-03-10_at_3.02.39_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GV4H7T7-6271fff5d1/screen_shot_2017-03-10_at_3.02.39_pm_160.png",
            "original_w": 616,
            "original_h": 572,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F4GV4H7T7/screen_shot_2017-03-10_at_3.02.39_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "dog",
                    "users": [
                        "U054FNLPS",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4GQHEER1",
            "timestamp": 1489183362,
            "name": "Image uploaded from iOS.jpg",
            "title": "Image uploaded from iOS",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0J6ZJTDM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GQHEER1/image_uploaded_from_ios.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GQHEER1/download/image_uploaded_from_ios.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHEER1-7cdda5922c/image_uploaded_from_ios_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHEER1-7cdda5922c/image_uploaded_from_ios_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHEER1-7cdda5922c/image_uploaded_from_ios_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHEER1-7cdda5922c/image_uploaded_from_ios_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHEER1-7cdda5922c/image_uploaded_from_ios_1024.jpg",
            "original_w": 1241,
            "original_h": 1518,
            "permalink": "https://appdirect.slack.com/files/arjun.krishna/F4GQHEER1/image_uploaded_from_ios.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4HHFHMAT",
            "timestamp": 1489183353,
            "name": "Pasted image at 2017_03_10 03_02 PM.png",
            "title": "Pasted image at 2017-03-10, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4HHFHMAT/pasted_image_at_2017_03_10_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4HHFHMAT/download/pasted_image_at_2017_03_10_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4HHFHMAT-5a438e85dd/pasted_image_at_2017_03_10_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4HHFHMAT-5a438e85dd/pasted_image_at_2017_03_10_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4HHFHMAT-5a438e85dd/pasted_image_at_2017_03_10_03_02_pm_160.png",
            "original_w": 511,
            "original_h": 197,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F4HHFHMAT/pasted_image_at_2017_03_10_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4GQHCNCB",
            "timestamp": 1489183352,
            "name": "Pasted image at 2017_03_10 03_02 PM.png",
            "title": "Pasted image at 2017-03-10, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GQHCNCB/pasted_image_at_2017_03_10_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GQHCNCB/download/pasted_image_at_2017_03_10_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHCNCB-79f4136b24/pasted_image_at_2017_03_10_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHCNCB-79f4136b24/pasted_image_at_2017_03_10_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHCNCB-79f4136b24/pasted_image_at_2017_03_10_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHCNCB-79f4136b24/pasted_image_at_2017_03_10_03_02_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4GQHCNCB-79f4136b24/pasted_image_at_2017_03_10_03_02_pm_1024.png",
            "original_w": 1269,
            "original_h": 591,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F4GQHCNCB/pasted_image_at_2017_03_10_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "face_with_head_bandage",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4GTM1B36",
            "timestamp": 1489183320,
            "name": "images (3).jpeg",
            "title": "images (3).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0B52QL07",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GTM1B36/images__3_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GTM1B36/download/images__3_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GTM1B36-95fa7fc1d1/images__3__360.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GTM1B36-95fa7fc1d1/images__3__160.jpg",
            "original_w": 358,
            "original_h": 141,
            "permalink": "https://appdirect.slack.com/files/aneet.sachdeva/F4GTM1B36/images__3_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "muscle",
                    "users": [
                        "U1324MZRS",
                        "U2PG17XKJ",
                        "U29KAMLAK",
                        "U13FJA80G",
                        "U0J6ZJTDM"
                    ],
                    "count": 5
                },
                {
                    "name": "+1",
                    "users": [
                        "U1000HJ8H",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4GV432QM",
            "timestamp": 1489183318,
            "name": "Screen Shot 2017-03-10 at 3.01.47 PM.png",
            "title": "Screen Shot 2017-03-10 at 3.01.47 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4GV432QM/screen_shot_2017-03-10_at_3.01.47_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4GV432QM/download/screen_shot_2017-03-10_at_3.01.47_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4GV432QM-eac635e689/screen_shot_2017-03-10_at_3.01.47_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4GV432QM-eac635e689/screen_shot_2017-03-10_at_3.01.47_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4GV432QM-eac635e689/screen_shot_2017-03-10_at_3.01.47_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4GV432QM-eac635e689/screen_shot_2017-03-10_at_3.01.47_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4GV432QM-eac635e689/screen_shot_2017-03-10_at_3.01.47_pm_1024.png",
            "original_w": 2430,
            "original_h": 1402,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F4GV432QM/screen_shot_2017-03-10_at_3.01.47_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "broken_heart",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4G5QMQV6",
            "timestamp": 1489183305,
            "name": "Screen Shot 2017-03-10 at 2.01.23 PM.png",
            "title": "So Majestic!",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4G5QMQV6/screen_shot_2017-03-10_at_2.01.23_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4G5QMQV6/download/screen_shot_2017-03-10_at_2.01.23_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4G5QMQV6-fb17d36ecc/screen_shot_2017-03-10_at_2.01.23_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4G5QMQV6-fb17d36ecc/screen_shot_2017-03-10_at_2.01.23_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4G5QMQV6-fb17d36ecc/screen_shot_2017-03-10_at_2.01.23_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4G5QMQV6-fb17d36ecc/screen_shot_2017-03-10_at_2.01.23_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4G5QMQV6-fb17d36ecc/screen_shot_2017-03-10_at_2.01.23_pm_1024.png",
            "original_w": 1346,
            "original_h": 1316,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F4G5QMQV6/screen_shot_2017-03-10_at_2.01.23_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "spider",
                    "users": [
                        "U1324MZRS",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G",
                        "U0J6ZJTDM"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4DJX5012",
            "timestamp": 1488579026,
            "name": "Drawing(8).png",
            "title": "Drawing(8).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4DJX5012/drawing_8_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4DJX5012/download/drawing_8_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4DJX5012-ce82fdab3e/drawing_8__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4DJX5012-ce82fdab3e/drawing_8__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4DJX5012-ce82fdab3e/drawing_8__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4DJX5012-ce82fdab3e/drawing_8__720.png",
            "original_w": 833,
            "original_h": 646,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F4DJX5012/drawing_8_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "question",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "whale2",
                    "users": [
                        "U2CL304CW"
                    ],
                    "count": 1
                },
                {
                    "name": "pokemonball",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4E8E76MC",
            "timestamp": 1488579000,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U47UK2SN6",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4E8E76MC/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4E8E76MC/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4E8E76MC-49cc30d5fb/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4E8E76MC-49cc30d5fb/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4E8E76MC-49cc30d5fb/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4E8E76MC-49cc30d5fb/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4E8E76MC-49cc30d5fb/drawing_1024.jpg",
            "original_w": 1215,
            "original_h": 650,
            "permalink": "https://appdirect.slack.com/files/brenna.devlin/F4E8E76MC/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc4CT9HA7K",
                "timestamp": 1488579000,
                "user": "U47UK2SN6",
                "is_intro": true,
                "comment": "Late to the party..."
            },
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G",
                        "U2QUK00RK",
                        "U2DU3TZL7",
                        "U0ZV9NY93"
                    ],
                    "count": 4
                },
                {
                    "name": "canada",
                    "users": [
                        "U0N226FV4",
                        "U2CL304CW",
                        "U2A6BJ71Q",
                        "U08P10WPQ"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4DLC3STF",
            "timestamp": 1488578739,
            "name": "Pasted image at 2017_03_03 03_05 PM.png",
            "title": "Moose",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4DLC3STF/pasted_image_at_2017_03_03_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4DLC3STF/download/pasted_image_at_2017_03_03_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4DLC3STF-ddf6173e02/pasted_image_at_2017_03_03_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4DLC3STF-ddf6173e02/pasted_image_at_2017_03_03_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4DLC3STF-ddf6173e02/pasted_image_at_2017_03_03_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4DLC3STF-ddf6173e02/pasted_image_at_2017_03_03_03_05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4DLC3STF-ddf6173e02/pasted_image_at_2017_03_03_03_05_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F4DLC3STF/pasted_image_at_2017_03_03_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM",
                        "U2DU3TZL7",
                        "U0ZV9NY93"
                    ],
                    "count": 3
                },
                {
                    "name": "eyes",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4CSDEL9W",
            "timestamp": 1488578727,
            "name": "Pasted image at 2017_03_03 03_05 PM.png",
            "title": "moose",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4CSDEL9W/pasted_image_at_2017_03_03_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4CSDEL9W/download/pasted_image_at_2017_03_03_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4CSDEL9W-f473139de6/pasted_image_at_2017_03_03_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4CSDEL9W-f473139de6/pasted_image_at_2017_03_03_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4CSDEL9W-f473139de6/pasted_image_at_2017_03_03_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4CSDEL9W-f473139de6/pasted_image_at_2017_03_03_03_05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4CSDEL9W-f473139de6/pasted_image_at_2017_03_03_03_05_pm_1024.png",
            "original_w": 1280,
            "original_h": 808,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F4CSDEL9W/pasted_image_at_2017_03_03_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "canada",
                    "users": [
                        "U13FJA80G",
                        "U0ZV9NY93",
                        "U08P10WPQ"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4CSDDYEL",
            "timestamp": 1488578724,
            "name": "Pasted image at 2017_03_03 03_05 PM.png",
            "title": "Pasted image at 2017-03-03, 3:05 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4CSDDYEL/pasted_image_at_2017_03_03_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4CSDDYEL/download/pasted_image_at_2017_03_03_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4CSDDYEL-996842c7ec/pasted_image_at_2017_03_03_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4CSDDYEL-996842c7ec/pasted_image_at_2017_03_03_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4CSDDYEL-996842c7ec/pasted_image_at_2017_03_03_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4CSDDYEL-996842c7ec/pasted_image_at_2017_03_03_03_05_pm_720.png",
            "original_w": 997,
            "original_h": 593,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F4CSDDYEL/pasted_image_at_2017_03_03_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "canada",
                    "users": [
                        "U13FJA80G",
                        "U0ZV9NY93",
                        "U2DU3TZL7",
                        "U0N226FV4",
                        "U08P10WPQ"
                    ],
                    "count": 5
                }
            ]
        },
        {
            "id": "F4CT7GE7K",
            "timestamp": 1488578720,
            "name": "Pasted image at 2017_03_03 03_05 PM.png",
            "title": "Pasted image at 2017-03-03, 3:05 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4CT7GE7K/pasted_image_at_2017_03_03_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4CT7GE7K/download/pasted_image_at_2017_03_03_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4CT7GE7K-b9fd279dd6/pasted_image_at_2017_03_03_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4CT7GE7K-b9fd279dd6/pasted_image_at_2017_03_03_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4CT7GE7K-b9fd279dd6/pasted_image_at_2017_03_03_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4CT7GE7K-b9fd279dd6/pasted_image_at_2017_03_03_03_05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4CT7GE7K-b9fd279dd6/pasted_image_at_2017_03_03_03_05_pm_1024.png",
            "original_w": 1695,
            "original_h": 933,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F4CT7GE7K/pasted_image_at_2017_03_03_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "crossed_swords",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "dizzy",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4DHR7JAE",
            "timestamp": 1488578694,
            "name": "Screen Shot 2017-03-03 at 3.04.36 PM.png",
            "title": "Screen Shot 2017-03-03 at 3.04.36 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4DHR7JAE/screen_shot_2017-03-03_at_3.04.36_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4DHR7JAE/download/screen_shot_2017-03-03_at_3.04.36_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4DHR7JAE-7a583ef5f3/screen_shot_2017-03-03_at_3.04.36_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4DHR7JAE-7a583ef5f3/screen_shot_2017-03-03_at_3.04.36_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4DHR7JAE-7a583ef5f3/screen_shot_2017-03-03_at_3.04.36_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4DHR7JAE-7a583ef5f3/screen_shot_2017-03-03_at_3.04.36_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4DHR7JAE-7a583ef5f3/screen_shot_2017-03-03_at_3.04.36_pm_1024.png",
            "original_w": 2658,
            "original_h": 1536,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F4DHR7JAE/screen_shot_2017-03-03_at_3.04.36_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "kiss",
                    "users": [
                        "U08P10WPQ",
                        "U2CL304CW",
                        "U1000HJ8H"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4E8BTAHL",
            "timestamp": 1488578688,
            "name": "moose.png",
            "title": "moose.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4E8BTAHL/moose.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4E8BTAHL/download/moose.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4E8BTAHL-5597030b95/moose_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4E8BTAHL-5597030b95/moose_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4E8BTAHL-5597030b95/moose_160.png",
            "original_w": 547,
            "original_h": 609,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F4E8BTAHL/moose.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "haircut",
                    "users": [
                        "U27DJ3JT0"
                    ],
                    "count": 1
                },
                {
                    "name": "sparkles",
                    "users": [
                        "U0ZV9NY93",
                        "U2KRMJ9MM"
                    ],
                    "count": 2
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G",
                        "U0ZV9NY93",
                        "U2KRMJ9MM"
                    ],
                    "count": 3
                },
                {
                    "name": "dark_sunglasses",
                    "users": [
                        "U2DU3TZL7",
                        "U2KRMJ9MM",
                        "U1000HJ8H",
                        "U08P10WPQ"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4CT74PMX",
            "timestamp": 1488578673,
            "name": "Screen Shot 2017-03-03 at 3.04.16 PM.png",
            "title": "Screen Shot 2017-03-03 at 3.04.16 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4CT74PMX/screen_shot_2017-03-03_at_3.04.16_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4CT74PMX/download/screen_shot_2017-03-03_at_3.04.16_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4CT74PMX-f45c3b0567/screen_shot_2017-03-03_at_3.04.16_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4CT74PMX-f45c3b0567/screen_shot_2017-03-03_at_3.04.16_pm_160.png",
            "original_w": 373,
            "original_h": 312,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F4CT74PMX/screen_shot_2017-03-03_at_3.04.16_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fire",
                    "users": [
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "canada",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4E8NLDP1",
            "timestamp": 1488578673,
            "name": "mooose JM.jpg",
            "title": "mooose JM.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2QUK00RK",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4E8NLDP1/mooose_jm.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4E8NLDP1/download/mooose_jm.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4E8NLDP1-356d380e7f/mooose_jm_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4E8NLDP1-356d380e7f/mooose_jm_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4E8NLDP1-356d380e7f/mooose_jm_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4E8NLDP1-356d380e7f/mooose_jm_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4E8NLDP1-356d380e7f/mooose_jm_1024.jpg",
            "original_w": 1124,
            "original_h": 712,
            "permalink": "https://appdirect.slack.com/files/james.mactavish/F4E8NLDP1/mooose_jm.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "telephone_receiver",
                    "users": [
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4E8BNMJA",
            "timestamp": 1488578659,
            "name": "Screen Shot 2017-03-03 at 3.03.59 PM.png",
            "title": "Screen Shot 2017-03-03 at 3.03.59 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4E8BNMJA/screen_shot_2017-03-03_at_3.03.59_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4E8BNMJA/download/screen_shot_2017-03-03_at_3.03.59_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4E8BNMJA-8d249d970f/screen_shot_2017-03-03_at_3.03.59_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4E8BNMJA-8d249d970f/screen_shot_2017-03-03_at_3.03.59_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4E8BNMJA-8d249d970f/screen_shot_2017-03-03_at_3.03.59_pm_160.png",
            "original_w": 630,
            "original_h": 564,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F4E8BNMJA/screen_shot_2017-03-03_at_3.03.59_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "gun",
                    "users": [
                        "U0ZV9NY93",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                },
                {
                    "name": "open_mouth",
                    "users": [
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G",
                        "U0N226FV4"
                    ],
                    "count": 2
                },
                {
                    "name": "see_no_evil",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4CSCN1K2",
            "timestamp": 1488578640,
            "name": "Drawing (3).png",
            "title": "munching Moose",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0N226FV4",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4CSCN1K2/drawing__3_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4CSCN1K2/download/drawing__3_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4CSCN1K2-1553d50cc1/drawing__3__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4CSCN1K2-1553d50cc1/drawing__3__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4CSCN1K2-1553d50cc1/drawing__3__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4CSCN1K2-1553d50cc1/drawing__3__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4CSCN1K2-1553d50cc1/drawing__3__1024.png",
            "original_w": 1055,
            "original_h": 623,
            "permalink": "https://appdirect.slack.com/files/ken.friesen/F4CSCN1K2/drawing__3_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "conga-parrot",
                    "users": [
                        "U2A6BJ71Q",
                        "U2DU3TZL7",
                        "U0ZV9NY93",
                        "U08P10WPQ"
                    ],
                    "count": 4
                },
                {
                    "name": "trophy",
                    "users": [
                        "U27DJ3JT0",
                        "U13GTGD7G",
                        "U0ZV9NY93",
                        "U13FJA80G",
                        "U2D7F59RU",
                        "U08P10WPQ"
                    ],
                    "count": 6
                },
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4DJU2VSQ",
            "timestamp": 1488578624,
            "name": "Pasted image at 2017_03_03 03_03 PM.png",
            "title": "Pasted image at 2017-03-03, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4DJU2VSQ/pasted_image_at_2017_03_03_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4DJU2VSQ/download/pasted_image_at_2017_03_03_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4DJU2VSQ-066a5685c3/pasted_image_at_2017_03_03_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4DJU2VSQ-066a5685c3/pasted_image_at_2017_03_03_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4DJU2VSQ-066a5685c3/pasted_image_at_2017_03_03_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4DJU2VSQ-066a5685c3/pasted_image_at_2017_03_03_03_03_pm_720.png",
            "original_w": 879,
            "original_h": 701,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F4DJU2VSQ/pasted_image_at_2017_03_03_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "dusty_stick",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4DLB43AR",
            "timestamp": 1488578609,
            "name": "Pasted image at 2017_03_03 03_03 PM.png",
            "title": "Moooooose",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4DLB43AR/pasted_image_at_2017_03_03_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4DLB43AR/download/pasted_image_at_2017_03_03_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4DLB43AR-7ace87a380/pasted_image_at_2017_03_03_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4DLB43AR-7ace87a380/pasted_image_at_2017_03_03_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4DLB43AR-7ace87a380/pasted_image_at_2017_03_03_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4DLB43AR-7ace87a380/pasted_image_at_2017_03_03_03_03_pm_720.png",
            "original_w": 807,
            "original_h": 686,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F4DLB43AR/pasted_image_at_2017_03_03_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "dusty_stick",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4E8N4T3R",
            "timestamp": 1488578601,
            "name": "Pasted image at 2017_03_03 03_03 PM.png",
            "title": "Pasted image at 2017-03-03, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4E8N4T3R/pasted_image_at_2017_03_03_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4E8N4T3R/download/pasted_image_at_2017_03_03_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4E8N4T3R-cdc01066d4/pasted_image_at_2017_03_03_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4E8N4T3R-cdc01066d4/pasted_image_at_2017_03_03_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4E8N4T3R-cdc01066d4/pasted_image_at_2017_03_03_03_03_pm_160.png",
            "original_w": 689,
            "original_h": 432,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F4E8N4T3R/pasted_image_at_2017_03_03_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U27DJ3JT0",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "ribbon",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4E8B8CP8",
            "timestamp": 1488578597,
            "name": "Pasted image at 2017_03_03 03_03 PM.png",
            "title": "stay off ma road!",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4E8B8CP8/pasted_image_at_2017_03_03_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4E8B8CP8/download/pasted_image_at_2017_03_03_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4E8B8CP8-cb4a2ad134/pasted_image_at_2017_03_03_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4E8B8CP8-cb4a2ad134/pasted_image_at_2017_03_03_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4E8B8CP8-cb4a2ad134/pasted_image_at_2017_03_03_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4E8B8CP8-cb4a2ad134/pasted_image_at_2017_03_03_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4E8B8CP8-cb4a2ad134/pasted_image_at_2017_03_03_03_03_pm_1024.png",
            "original_w": 1074,
            "original_h": 665,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F4E8B8CP8/pasted_image_at_2017_03_03_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "oncoming_police_car",
                    "users": [
                        "U0ZV9NY93",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "crossed_swords",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "car",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4E8B1BRU",
            "timestamp": 1488578578,
            "name": "Mooooose.jpeg",
            "title": "Mooooose.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2J6FK5CZ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4E8B1BRU/mooooose.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4E8B1BRU/download/mooooose.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4E8B1BRU-e17df05963/mooooose_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4E8B1BRU-e17df05963/mooooose_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4E8B1BRU-e17df05963/mooooose_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4E8B1BRU-e17df05963/mooooose_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4E8B1BRU-e17df05963/mooooose_1024.jpg",
            "original_w": 1699,
            "original_h": 910,
            "permalink": "https://appdirect.slack.com/files/diana.barwich/F4E8B1BRU/mooooose.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "star",
                    "users": [
                        "U2CL304CW",
                        "U2DU3TZL7",
                        "U1000HJ8H"
                    ],
                    "count": 3
                },
                {
                    "name": "tada",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "star2",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4AV8HL4W",
            "timestamp": 1487973894,
            "name": "orang tang.png",
            "title": "orang tang",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2QUK00RK",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4AV8HL4W/orang_tang.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4AV8HL4W/download/orang_tang.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4AV8HL4W-f9035ff209/orang_tang_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4AV8HL4W-f9035ff209/orang_tang_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4AV8HL4W-f9035ff209/orang_tang_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4AV8HL4W-f9035ff209/orang_tang_720.png",
            "original_w": 883,
            "original_h": 712,
            "permalink": "https://appdirect.slack.com/files/james.mactavish/F4AV8HL4W/orang_tang.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "tangerine",
                    "users": [
                        "U0ZV9NY93",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4B04TTB9",
            "timestamp": 1487973842,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0B52QL07",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4B04TTB9/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4B04TTB9/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4B04TTB9-dbf02e712f/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4B04TTB9-dbf02e712f/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4B04TTB9-dbf02e712f/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4B04TTB9-dbf02e712f/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4B04TTB9-dbf02e712f/drawing_1024.jpg",
            "original_w": 1213,
            "original_h": 700,
            "permalink": "https://appdirect.slack.com/files/aneet.sachdeva/F4B04TTB9/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F49HVGG4Q",
            "timestamp": 1487973841,
            "name": "Screen Shot 2017-02-24 at 3.03.25 PM.png",
            "title": "Screen Shot 2017-02-24 at 3.03.25 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F49HVGG4Q/screen_shot_2017-02-24_at_3.03.25_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F49HVGG4Q/download/screen_shot_2017-02-24_at_3.03.25_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F49HVGG4Q-c008fae3f9/screen_shot_2017-02-24_at_3.03.25_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F49HVGG4Q-c008fae3f9/screen_shot_2017-02-24_at_3.03.25_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F49HVGG4Q-c008fae3f9/screen_shot_2017-02-24_at_3.03.25_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F49HVGG4Q-c008fae3f9/screen_shot_2017-02-24_at_3.03.25_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F49HVGG4Q-c008fae3f9/screen_shot_2017-02-24_at_3.03.25_pm_1024.png",
            "original_w": 2182,
            "original_h": 1534,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F49HVGG4Q/screen_shot_2017-02-24_at_3.03.25_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2G1VV7AR"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4AV84AMC",
            "timestamp": 1487973836,
            "name": "Image uploaded from iOS.jpg",
            "title": "Image uploaded from iOS",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0J6ZJTDM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4AV84AMC/image_uploaded_from_ios.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4AV84AMC/download/image_uploaded_from_ios.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4AV84AMC-ba7af40f1f/image_uploaded_from_ios_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4AV84AMC-ba7af40f1f/image_uploaded_from_ios_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4AV84AMC-ba7af40f1f/image_uploaded_from_ios_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4AV84AMC-ba7af40f1f/image_uploaded_from_ios_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4AV84AMC-ba7af40f1f/image_uploaded_from_ios_1024.jpg",
            "original_w": 1472,
            "original_h": 1139,
            "permalink": "https://appdirect.slack.com/files/arjun.krishna/F4AV84AMC/image_uploaded_from_ios.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F4A97CC3U",
            "timestamp": 1487973833,
            "name": "Pasted image at 2017_02_24 03_03 PM.png",
            "title": "oranggutan",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4A97CC3U/pasted_image_at_2017_02_24_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4A97CC3U/download/pasted_image_at_2017_02_24_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4A97CC3U-b2f6519a26/pasted_image_at_2017_02_24_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4A97CC3U-b2f6519a26/pasted_image_at_2017_02_24_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4A97CC3U-b2f6519a26/pasted_image_at_2017_02_24_03_03_pm_160.png",
            "original_w": 529,
            "original_h": 705,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F4A97CC3U/pasted_image_at_2017_02_24_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F4A76R403",
            "timestamp": 1487973831,
            "name": "Pasted image at 2017_02_24 03_03 PM.png",
            "title": "Pasted image at 2017-02-24, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4A76R403/pasted_image_at_2017_02_24_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4A76R403/download/pasted_image_at_2017_02_24_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4A76R403-cb45aa4f7f/pasted_image_at_2017_02_24_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4A76R403-cb45aa4f7f/pasted_image_at_2017_02_24_03_03_pm_160.png",
            "original_w": 459,
            "original_h": 338,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F4A76R403/pasted_image_at_2017_02_24_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "lightning",
                    "users": [
                        "U27DJ3JT0"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4AB78AHJ",
            "timestamp": 1487973830,
            "name": "orangutan.jpg",
            "title": "orangutan.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4AB78AHJ/orangutan.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4AB78AHJ/download/orangutan.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4AB78AHJ-6157ea2761/orangutan_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4AB78AHJ-6157ea2761/orangutan_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4AB78AHJ-6157ea2761/orangutan_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4AB78AHJ-6157ea2761/orangutan_720.jpg",
            "original_w": 800,
            "original_h": 800,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F4AB78AHJ/orangutan.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "poodle",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4B04QVPZ",
            "timestamp": 1487973823,
            "name": "Screen Shot 2017-02-24 at 3.03.20 PM.png",
            "title": "Screen Shot 2017-02-24 at 3.03.20 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4B04QVPZ/screen_shot_2017-02-24_at_3.03.20_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4B04QVPZ/download/screen_shot_2017-02-24_at_3.03.20_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4B04QVPZ-b37215f38d/screen_shot_2017-02-24_at_3.03.20_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4B04QVPZ-b37215f38d/screen_shot_2017-02-24_at_3.03.20_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4B04QVPZ-b37215f38d/screen_shot_2017-02-24_at_3.03.20_pm_160.png",
            "original_w": 680,
            "original_h": 530,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F4B04QVPZ/screen_shot_2017-02-24_at_3.03.20_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "leaves",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F49JPC9EV",
            "timestamp": 1487973812,
            "name": "Screen Shot 2017-02-24 at 3.03.21 PM.png",
            "title": "Screen Shot 2017-02-24 at 3.03.21 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F49JPC9EV/screen_shot_2017-02-24_at_3.03.21_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F49JPC9EV/download/screen_shot_2017-02-24_at_3.03.21_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F49JPC9EV-625a07ca73/screen_shot_2017-02-24_at_3.03.21_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F49JPC9EV-625a07ca73/screen_shot_2017-02-24_at_3.03.21_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F49JPC9EV-625a07ca73/screen_shot_2017-02-24_at_3.03.21_pm_160.png",
            "original_w": 689,
            "original_h": 593,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F49JPC9EV/screen_shot_2017-02-24_at_3.03.21_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4AB6TF0U",
            "timestamp": 1487973788,
            "name": "Unknown.jpg",
            "title": "Unknown.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2D7F59RU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4AB6TF0U/unknown.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4AB6TF0U/download/unknown.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4AB6TF0U-424181a6e9/unknown_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4AB6TF0U-424181a6e9/unknown_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4AB6TF0U-424181a6e9/unknown_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4AB6TF0U-424181a6e9/unknown_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4AB6TF0U-424181a6e9/unknown_1024.jpg",
            "original_w": 1215,
            "original_h": 766,
            "permalink": "https://appdirect.slack.com/files/george.dimitrov/F4AB6TF0U/unknown.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U1324MZRS",
                        "U13FJA80G",
                        "U27DJ3JT0",
                        "U2DU3TZL7",
                        "U2PG17XKJ"
                    ],
                    "count": 5
                }
            ]
        },
        {
            "id": "F4B04DENT",
            "timestamp": 1487973778,
            "name": "Screen Shot 2017-02-24 at 2.02.38 PM.png",
            "title": "Screen Shot 2017-02-24 at 2.02.38 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4B04DENT/screen_shot_2017-02-24_at_2.02.38_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4B04DENT/download/screen_shot_2017-02-24_at_2.02.38_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4B04DENT-1181786bb5/screen_shot_2017-02-24_at_2.02.38_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4B04DENT-1181786bb5/screen_shot_2017-02-24_at_2.02.38_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4B04DENT-1181786bb5/screen_shot_2017-02-24_at_2.02.38_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4B04DENT-1181786bb5/screen_shot_2017-02-24_at_2.02.38_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4B04DENT-1181786bb5/screen_shot_2017-02-24_at_2.02.38_pm_1024.png",
            "original_w": 1792,
            "original_h": 1494,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F4B04DENT/screen_shot_2017-02-24_at_2.02.38_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U1324MZRS",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4B04D64F",
            "timestamp": 1487973777,
            "name": "Screen Shot 2017-02-24 at 3.02.41 PM.png",
            "title": "Screen Shot 2017-02-24 at 3.02.41 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4B04D64F/screen_shot_2017-02-24_at_3.02.41_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4B04D64F/download/screen_shot_2017-02-24_at_3.02.41_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4B04D64F-09c522c35f/screen_shot_2017-02-24_at_3.02.41_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4B04D64F-09c522c35f/screen_shot_2017-02-24_at_3.02.41_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4B04D64F-09c522c35f/screen_shot_2017-02-24_at_3.02.41_pm_160.png",
            "original_w": 549,
            "original_h": 275,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F4B04D64F/screen_shot_2017-02-24_at_3.02.41_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U1324MZRS",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "fire",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4B04AJ5V",
            "timestamp": 1487973761,
            "name": "Pasted image at 2017_02_24 03_02 PM.png",
            "title": "Pasted image at 2017-02-24, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4B04AJ5V/pasted_image_at_2017_02_24_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4B04AJ5V/download/pasted_image_at_2017_02_24_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4B04AJ5V-fc3ace313d/pasted_image_at_2017_02_24_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4B04AJ5V-fc3ace313d/pasted_image_at_2017_02_24_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4B04AJ5V-fc3ace313d/pasted_image_at_2017_02_24_03_02_pm_160.png",
            "original_w": 678,
            "original_h": 427,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F4B04AJ5V/pasted_image_at_2017_02_24_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "tomato",
                    "users": [
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U2DU3TZL7",
                        "U2CL304CW"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F4AB6NEG4",
            "timestamp": 1487973760,
            "name": "Pasted image at 2017_02_24 03_02 PM.png",
            "title": "Pasted image at 2017-02-24, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4AB6NEG4/pasted_image_at_2017_02_24_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4AB6NEG4/download/pasted_image_at_2017_02_24_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4AB6NEG4-fa0ab65142/pasted_image_at_2017_02_24_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4AB6NEG4-fa0ab65142/pasted_image_at_2017_02_24_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4AB6NEG4-fa0ab65142/pasted_image_at_2017_02_24_03_02_pm_160.png",
            "original_w": 665,
            "original_h": 489,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F4AB6NEG4/pasted_image_at_2017_02_24_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "muscle",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F49HUT08Y",
            "timestamp": 1487973749,
            "name": "Drawing (2).jpeg",
            "title": "Drawing (2).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F49HUT08Y/drawing__2_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F49HUT08Y/download/drawing__2_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F49HUT08Y-9d9bbfd380/drawing__2__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F49HUT08Y-9d9bbfd380/drawing__2__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F49HUT08Y-9d9bbfd380/drawing__2__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F49HUT08Y-9d9bbfd380/drawing__2__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F49HUT08Y-9d9bbfd380/drawing__2__1024.jpg",
            "original_w": 1695,
            "original_h": 900,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F49HUT08Y/drawing__2_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW",
                        "U0ZV9NY93",
                        "U27DJ3JT0",
                        "U2HN6FYRM"
                    ],
                    "count": 4
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U1324MZRS",
                        "U27DJ3JT0"
                    ],
                    "count": 2
                },
                {
                    "name": "trophy",
                    "users": [
                        "U0ZV9NY93",
                        "U27DJ3JT0",
                        "U2CL304CW"
                    ],
                    "count": 3
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4ABT4K1B",
            "timestamp": 1487973711,
            "name": "Screen Shot 2017-02-24 at 3.01.33 PM.png",
            "title": "Screen Shot 2017-02-24 at 3.01.33 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4ABT4K1B/screen_shot_2017-02-24_at_3.01.33_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4ABT4K1B/download/screen_shot_2017-02-24_at_3.01.33_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4ABT4K1B-b8ab9446b8/screen_shot_2017-02-24_at_3.01.33_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4ABT4K1B-b8ab9446b8/screen_shot_2017-02-24_at_3.01.33_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4ABT4K1B-b8ab9446b8/screen_shot_2017-02-24_at_3.01.33_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4ABT4K1B-b8ab9446b8/screen_shot_2017-02-24_at_3.01.33_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4ABT4K1B-b8ab9446b8/screen_shot_2017-02-24_at_3.01.33_pm_1024.png",
            "original_w": 2416,
            "original_h": 1388,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F4ABT4K1B/screen_shot_2017-02-24_at_3.01.33_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "crossed_swords",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F475PR4HZ",
            "timestamp": 1487369139,
            "name": "Pasted image at 2017_02_17 03_05 PM.png",
            "title": "Ladybug",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F475PR4HZ/pasted_image_at_2017_02_17_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F475PR4HZ/download/pasted_image_at_2017_02_17_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F475PR4HZ-ec839fe838/pasted_image_at_2017_02_17_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F475PR4HZ-ec839fe838/pasted_image_at_2017_02_17_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F475PR4HZ-ec839fe838/pasted_image_at_2017_02_17_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F475PR4HZ-ec839fe838/pasted_image_at_2017_02_17_03_05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F475PR4HZ-ec839fe838/pasted_image_at_2017_02_17_03_05_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F475PR4HZ/pasted_image_at_2017_02_17_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "eyes",
                    "users": [
                        "U0ZV9NY93",
                        "U2PKVNC87",
                        "U2DU3TZL7",
                        "U2D7F59RU",
                        "U1000HJ8H",
                        "U08P10WPQ",
                        "U2CL304CW"
                    ],
                    "count": 7
                },
                {
                    "name": "octopus",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F46GBNDPS",
            "timestamp": 1487369072,
            "name": "Drawing(7).png",
            "title": "Drawing(7).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F46GBNDPS/drawing_7_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F46GBNDPS/download/drawing_7_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F46GBNDPS-cbcad63412/drawing_7__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F46GBNDPS-cbcad63412/drawing_7__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F46GBNDPS-cbcad63412/drawing_7__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F46GBNDPS-cbcad63412/drawing_7__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F46GBNDPS-cbcad63412/drawing_7__1024.png",
            "original_w": 1035,
            "original_h": 630,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F46GBNDPS/drawing_7_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "kiss",
                    "users": [
                        "U1000HJ8H",
                        "U054FNLPS",
                        "U2KRMJ9MM",
                        "U2CL304CW",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 6
                },
                {
                    "name": "hot_pepper",
                    "users": [
                        "U0ZV9NY93",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U1000HJ8H",
                        "U0ANK8V43",
                        "U13FJA80G"
                    ],
                    "count": 3
                },
                {
                    "name": "stuck_out_tongue_closed_eyes",
                    "users": [
                        "U0B52QL07"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F47A17Y2G",
            "timestamp": 1487369068,
            "name": "Pasted image at 2017_02_17 03_04 PM.png",
            "title": "Pasted image at 2017-02-17, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F47A17Y2G/pasted_image_at_2017_02_17_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F47A17Y2G/download/pasted_image_at_2017_02_17_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F47A17Y2G-bcc02280d5/pasted_image_at_2017_02_17_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F47A17Y2G-bcc02280d5/pasted_image_at_2017_02_17_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F47A17Y2G-bcc02280d5/pasted_image_at_2017_02_17_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F47A17Y2G-bcc02280d5/pasted_image_at_2017_02_17_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F47A17Y2G-bcc02280d5/pasted_image_at_2017_02_17_03_04_pm_1024.png",
            "original_w": 1304,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F47A17Y2G/pasted_image_at_2017_02_17_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "muscle",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F47AAMAQ5",
            "timestamp": 1487369040,
            "name": "Pasted image at 2017_02_17 03_03 PM.png",
            "title": "Pasted image at 2017-02-17, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F47AAMAQ5/pasted_image_at_2017_02_17_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F47AAMAQ5/download/pasted_image_at_2017_02_17_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F47AAMAQ5-9ff76a88aa/pasted_image_at_2017_02_17_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F47AAMAQ5-9ff76a88aa/pasted_image_at_2017_02_17_03_03_pm_160.png",
            "original_w": 315,
            "original_h": 286,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F47AAMAQ5/pasted_image_at_2017_02_17_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "beers",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "red_circle",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F46GBBU3S",
            "timestamp": 1487369027,
            "name": "Unknown.jpg",
            "title": "Francis",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2D7F59RU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F46GBBU3S/unknown.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F46GBBU3S/download/unknown.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F46GBBU3S-063052008a/unknown_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F46GBBU3S-063052008a/unknown_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F46GBBU3S-063052008a/unknown_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F46GBBU3S-063052008a/unknown_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F46GBBU3S-063052008a/unknown_1024.jpg",
            "original_w": 1215,
            "original_h": 766,
            "permalink": "https://appdirect.slack.com/files/george.dimitrov/F46GBBU3S/unknown.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fire",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "guardsman",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F47TPNY30",
            "timestamp": 1487369017,
            "name": "Screen Shot 2017-02-17 at 14.03.09.png",
            "title": "Screen Shot 2017-02-17 at 14.03.09.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0J6ZJTDM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F47TPNY30/screen_shot_2017-02-17_at_14.03.09.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F47TPNY30/download/screen_shot_2017-02-17_at_14.03.09.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F47TPNY30-ef19028681/screen_shot_2017-02-17_at_14.03.09_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F47TPNY30-ef19028681/screen_shot_2017-02-17_at_14.03.09_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F47TPNY30-ef19028681/screen_shot_2017-02-17_at_14.03.09_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F47TPNY30-ef19028681/screen_shot_2017-02-17_at_14.03.09_720.png",
            "original_w": 884,
            "original_h": 854,
            "permalink": "https://appdirect.slack.com/files/arjun.krishna/F47TPNY30/screen_shot_2017-02-17_at_14.03.09.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "question",
                    "users": [
                        "U2PKVNC87",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F47TPMRTQ",
            "timestamp": 1487369009,
            "name": "Screen Shot 2017-02-17 at 2.03.12 PM.png",
            "title": "Screen Shot 2017-02-17 at 2.03.12 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F47TPMRTQ/screen_shot_2017-02-17_at_2.03.12_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F47TPMRTQ/download/screen_shot_2017-02-17_at_2.03.12_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F47TPMRTQ-784c2b7f2e/screen_shot_2017-02-17_at_2.03.12_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F47TPMRTQ-784c2b7f2e/screen_shot_2017-02-17_at_2.03.12_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F47TPMRTQ-784c2b7f2e/screen_shot_2017-02-17_at_2.03.12_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F47TPMRTQ-784c2b7f2e/screen_shot_2017-02-17_at_2.03.12_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F47TPMRTQ-784c2b7f2e/screen_shot_2017-02-17_at_2.03.12_pm_1024.png",
            "original_w": 1816,
            "original_h": 1428,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F47TPMRTQ/screen_shot_2017-02-17_at_2.03.12_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "mushroom",
                    "users": [
                        "U2G4XKRRU"
                    ],
                    "count": 1
                },
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "+1",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F47TPKBK8",
            "timestamp": 1487368997,
            "name": "Drawing(2).jpeg",
            "title": "Drawing(2).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F47TPKBK8/drawing_2_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F47TPKBK8/download/drawing_2_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F47TPKBK8-189d65f6d0/drawing_2__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F47TPKBK8-189d65f6d0/drawing_2__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F47TPKBK8-189d65f6d0/drawing_2__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F47TPKBK8-189d65f6d0/drawing_2__720.jpg",
            "original_w": 721,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F47TPKBK8/drawing_2_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7",
                        "U054FNLPS"
                    ],
                    "count": 2
                },
                {
                    "name": "trophy",
                    "users": [
                        "U0ZV9NY93",
                        "U2CL304CW",
                        "U08P10WPQ",
                        "U2DU3TZL7",
                        "U13FJA80G",
                        "U2G4XKRRU",
                        "U1000HJ8H",
                        "U0B52QL07"
                    ],
                    "count": 8
                }
            ]
        },
        {
            "id": "F47TPJZ4N",
            "timestamp": 1487368996,
            "name": "Screen Shot 2017-02-17 at 3.02.57 PM.png",
            "title": "Screen Shot 2017-02-17 at 3.02.57 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F47TPJZ4N/screen_shot_2017-02-17_at_3.02.57_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F47TPJZ4N/download/screen_shot_2017-02-17_at_3.02.57_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F47TPJZ4N-cfa013401b/screen_shot_2017-02-17_at_3.02.57_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F47TPJZ4N-cfa013401b/screen_shot_2017-02-17_at_3.02.57_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F47TPJZ4N-cfa013401b/screen_shot_2017-02-17_at_3.02.57_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F47TPJZ4N-cfa013401b/screen_shot_2017-02-17_at_3.02.57_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F47TPJZ4N-cfa013401b/screen_shot_2017-02-17_at_3.02.57_pm_1024.png",
            "original_w": 1566,
            "original_h": 814,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F47TPJZ4N/screen_shot_2017-02-17_at_3.02.57_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U1000HJ8H",
                        "U2CL304CW",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "scorpion",
                    "users": [
                        "U054FNLPS",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "tada",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F47U19N87",
            "timestamp": 1487368996,
            "name": "Pasted image at 2017_02_17 03_03 PM.png",
            "title": "notsolady_ladybug",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F47U19N87/pasted_image_at_2017_02_17_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F47U19N87/download/pasted_image_at_2017_02_17_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F47U19N87-8de38acfb1/pasted_image_at_2017_02_17_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F47U19N87-8de38acfb1/pasted_image_at_2017_02_17_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F47U19N87-8de38acfb1/pasted_image_at_2017_02_17_03_03_pm_160.png",
            "original_w": 670,
            "original_h": 581,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F47U19N87/pasted_image_at_2017_02_17_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "laughing",
                    "users": [
                        "U2A6BJ71Q",
                        "U2G4XKRRU",
                        "U08P10WPQ"
                    ],
                    "count": 3
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F46GB1LEL",
            "timestamp": 1487368987,
            "name": "Screen Shot 2017-02-17 at 3.01.29 PM.png",
            "title": "Screen Shot 2017-02-17 at 3.01.29 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F46GB1LEL/screen_shot_2017-02-17_at_3.01.29_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F46GB1LEL/download/screen_shot_2017-02-17_at_3.01.29_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F46GB1LEL-ae1969ac54/screen_shot_2017-02-17_at_3.01.29_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F46GB1LEL-ae1969ac54/screen_shot_2017-02-17_at_3.01.29_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F46GB1LEL-ae1969ac54/screen_shot_2017-02-17_at_3.01.29_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F46GB1LEL-ae1969ac54/screen_shot_2017-02-17_at_3.01.29_pm_720.png",
            "original_w": 914,
            "original_h": 768,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F46GB1LEL/screen_shot_2017-02-17_at_3.01.29_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2DU3TZL7",
                        "U29KAMLAK",
                        "U0B52QL07"
                    ],
                    "count": 3
                },
                {
                    "name": "purse",
                    "users": [
                        "U0ZV9NY93",
                        "U08P10WPQ",
                        "U2CL304CW"
                    ],
                    "count": 3
                },
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F46GB0L2U",
            "timestamp": 1487368982,
            "name": "Drawing (1).jpeg",
            "title": "Drawing (1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F46GB0L2U/drawing__1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F46GB0L2U/download/drawing__1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F46GB0L2U-3fbae3d802/drawing__1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F46GB0L2U-3fbae3d802/drawing__1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F46GB0L2U-3fbae3d802/drawing__1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F46GB0L2U-3fbae3d802/drawing__1__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F46GB0L2U-3fbae3d802/drawing__1__1024.jpg",
            "original_w": 1695,
            "original_h": 900,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F46GB0L2U/drawing__1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "anguished",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U054FNLPS",
                        "U2G4XKRRU",
                        "U13FJA80G"
                    ],
                    "count": 3
                },
                {
                    "name": "shower",
                    "users": [
                        "U0ZV9NY93",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F46GAU8TA",
            "timestamp": 1487368970,
            "name": "Pasted image at 2017_02_17 03_02 PM.png",
            "title": "Pasted image at 2017-02-17, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F46GAU8TA/pasted_image_at_2017_02_17_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F46GAU8TA/download/pasted_image_at_2017_02_17_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F46GAU8TA-79d6f132ff/pasted_image_at_2017_02_17_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F46GAU8TA-79d6f132ff/pasted_image_at_2017_02_17_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F46GAU8TA-79d6f132ff/pasted_image_at_2017_02_17_03_02_pm_160.png",
            "original_w": 651,
            "original_h": 550,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F46GAU8TA/pasted_image_at_2017_02_17_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "girl",
                    "users": [
                        "U08P10WPQ",
                        "U2D7F59RU"
                    ],
                    "count": 2
                },
                {
                    "name": "beers",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F47A0CKE0",
            "timestamp": 1487368960,
            "name": "Pasted image at 2017_02_17 03_02 PM.png",
            "title": "Ladybug",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F47A0CKE0/pasted_image_at_2017_02_17_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F47A0CKE0/download/pasted_image_at_2017_02_17_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F47A0CKE0-c1e4714bc1/pasted_image_at_2017_02_17_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F47A0CKE0-c1e4714bc1/pasted_image_at_2017_02_17_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F47A0CKE0-c1e4714bc1/pasted_image_at_2017_02_17_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F47A0CKE0-c1e4714bc1/pasted_image_at_2017_02_17_03_02_pm_720.png",
            "original_w": 951,
            "original_h": 565,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F47A0CKE0/pasted_image_at_2017_02_17_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "red_circle",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "question",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F44PJN747",
            "timestamp": 1486764585,
            "name": "Pasted image at 2017_02_10 03_09 PM.png",
            "title": "Late Bison",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F44PJN747/pasted_image_at_2017_02_10_03_09_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F44PJN747/download/pasted_image_at_2017_02_10_03_09_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F44PJN747-e898765b85/pasted_image_at_2017_02_10_03_09_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F44PJN747-e898765b85/pasted_image_at_2017_02_10_03_09_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F44PJN747-e898765b85/pasted_image_at_2017_02_10_03_09_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F44PJN747-e898765b85/pasted_image_at_2017_02_10_03_09_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F44PJN747-e898765b85/pasted_image_at_2017_02_10_03_09_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F44PJN747/pasted_image_at_2017_02_10_03_09_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7",
                        "U1000HJ8H",
                        "U054FNLPS"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F4435RX26",
            "timestamp": 1486764335,
            "name": "IMG_20160904_140624-01.jpeg",
            "title": "IMG_20160904_140624-01.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2PKR3B2S",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4435RX26/img_20160904_140624-01.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4435RX26/download/img_20160904_140624-01.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4435RX26-d51806f77b/img_20160904_140624-01_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4435RX26-d51806f77b/img_20160904_140624-01_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4435RX26-d51806f77b/img_20160904_140624-01_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4435RX26-d51806f77b/img_20160904_140624-01_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4435RX26-d51806f77b/img_20160904_140624-01_1024.jpg",
            "original_w": 1995,
            "original_h": 1496,
            "permalink": "https://appdirect.slack.com/files/darnell.shinbine/F4435RX26/img_20160904_140624-01.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F44P5PCFQ",
            "timestamp": 1486764324,
            "name": "Pasted image at 2017_02_10 03_05 PM.png",
            "title": "Australian bison",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL6JEQN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F44P5PCFQ/pasted_image_at_2017_02_10_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F44P5PCFQ/download/pasted_image_at_2017_02_10_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F44P5PCFQ-df64797122/pasted_image_at_2017_02_10_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F44P5PCFQ-df64797122/pasted_image_at_2017_02_10_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F44P5PCFQ-df64797122/pasted_image_at_2017_02_10_03_05_pm_160.png",
            "original_w": 703,
            "original_h": 436,
            "permalink": "https://appdirect.slack.com/files/steve.hansensmythe/F44P5PCFQ/pasted_image_at_2017_02_10_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F44PG8AQ7",
            "timestamp": 1486764251,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F44PG8AQ7/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F44PG8AQ7/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F44PG8AQ7-d907e435a5/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F44PG8AQ7-d907e435a5/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F44PG8AQ7-d907e435a5/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F44PG8AQ7-d907e435a5/drawing_720.jpg",
            "original_w": 721,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F44PG8AQ7/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "hamburger",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "question",
                    "users": [
                        "U1000HJ8H"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F44P55CVC",
            "timestamp": 1486764251,
            "name": "Pasted image at 2017_02_10 03_04 PM.png",
            "title": "on the way to Banff",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F44P55CVC/pasted_image_at_2017_02_10_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F44P55CVC/download/pasted_image_at_2017_02_10_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F44P55CVC-7d94dbd3a1/pasted_image_at_2017_02_10_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F44P55CVC-7d94dbd3a1/pasted_image_at_2017_02_10_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F44P55CVC-7d94dbd3a1/pasted_image_at_2017_02_10_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F44P55CVC-7d94dbd3a1/pasted_image_at_2017_02_10_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F44P55CVC-7d94dbd3a1/pasted_image_at_2017_02_10_03_04_pm_1024.png",
            "original_w": 1469,
            "original_h": 850,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F44P55CVC/pasted_image_at_2017_02_10_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F445RTQAZ",
            "timestamp": 1486764247,
            "name": "Pasted image at 2017_02_10 03_04 PM.png",
            "title": "Pasted image at 2017-02-10, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F445RTQAZ/pasted_image_at_2017_02_10_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F445RTQAZ/download/pasted_image_at_2017_02_10_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F445RTQAZ-bfd57095ad/pasted_image_at_2017_02_10_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F445RTQAZ-bfd57095ad/pasted_image_at_2017_02_10_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F445RTQAZ-bfd57095ad/pasted_image_at_2017_02_10_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F445RTQAZ-bfd57095ad/pasted_image_at_2017_02_10_03_04_pm_720.png",
            "original_w": 930,
            "original_h": 591,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F445RTQAZ/pasted_image_at_2017_02_10_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U2DU3TZL7",
                        "U27DJ3JT0",
                        "U0ZV9NY93",
                        "U2RS6CKRU",
                        "U2HN6FYRM",
                        "U13FJA80G",
                        "U2ASS8TEH",
                        "U1000HJ8H",
                        "U0J6ZJTDM"
                    ],
                    "count": 9
                },
                {
                    "name": "tada",
                    "users": [
                        "U27DJ3JT0",
                        "U2A6BJ71Q"
                    ],
                    "count": 2
                },
                {
                    "name": "zap",
                    "users": [
                        "U2PKVNC87"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F43CKU109",
            "timestamp": 1486764243,
            "name": "Pasted image at 2017_02_10 03_04 PM.png",
            "title": "Pasted image at 2017-02-10, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2RS6CKRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F43CKU109/pasted_image_at_2017_02_10_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F43CKU109/download/pasted_image_at_2017_02_10_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F43CKU109-b65a6ff61d/pasted_image_at_2017_02_10_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F43CKU109-b65a6ff61d/pasted_image_at_2017_02_10_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F43CKU109-b65a6ff61d/pasted_image_at_2017_02_10_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F43CKU109-b65a6ff61d/pasted_image_at_2017_02_10_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F43CKU109-b65a6ff61d/pasted_image_at_2017_02_10_03_04_pm_1024.png",
            "original_w": 1225,
            "original_h": 1043,
            "permalink": "https://appdirect.slack.com/files/mark.willoughby/F43CKU109/pasted_image_at_2017_02_10_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW",
                        "U1000HJ8H",
                        "U13FJA80G",
                        "U2ASS8TEH",
                        "U2DU3TZL7",
                        "U054FNLPS"
                    ],
                    "count": 6
                }
            ]
        },
        {
            "id": "F44P52HQE",
            "timestamp": 1486764241,
            "name": "bisongoodeats.png",
            "title": "bisongoodeats.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F44P52HQE/bisongoodeats.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F44P52HQE/download/bisongoodeats.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F44P52HQE-9e270bb2a5/bisongoodeats_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F44P52HQE-9e270bb2a5/bisongoodeats_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F44P52HQE-9e270bb2a5/bisongoodeats_160.png",
            "original_w": 500,
            "original_h": 500,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F44P52HQE/bisongoodeats.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc445F5S4C",
                "timestamp": 1486764241,
                "user": "U2PKVNC87",
                "is_intro": true,
                "comment": "which is the best part?"
            },
            "reactions": [
                {
                    "name": "hamburger",
                    "users": [
                        "U2DU3TZL7",
                        "U13FJA80G",
                        "U27CYR4BF"
                    ],
                    "count": 3
                },
                {
                    "name": "meat_on_bone",
                    "users": [
                        "U054FNLPS",
                        "U13FJA80G",
                        "U2DU3TZL7",
                        "U0J6ZJTDM"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F445F4SUU",
            "timestamp": 1486764237,
            "name": "Screen Shot 2017-02-10 at 3.03.37 PM.png",
            "title": "Screen Shot 2017-02-10 at 3.03.37 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F445F4SUU/screen_shot_2017-02-10_at_3.03.37_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F445F4SUU/download/screen_shot_2017-02-10_at_3.03.37_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F445F4SUU-836f75114f/screen_shot_2017-02-10_at_3.03.37_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F445F4SUU-836f75114f/screen_shot_2017-02-10_at_3.03.37_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F445F4SUU-836f75114f/screen_shot_2017-02-10_at_3.03.37_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F445F4SUU-836f75114f/screen_shot_2017-02-10_at_3.03.37_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F445F4SUU-836f75114f/screen_shot_2017-02-10_at_3.03.37_pm_1024.png",
            "original_w": 1806,
            "original_h": 898,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F445F4SUU/screen_shot_2017-02-10_at_3.03.37_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F44P50K5L",
            "timestamp": 1486764228,
            "name": "bison.png",
            "title": "bison.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F44P50K5L/bison.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F44P50K5L/download/bison.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F44P50K5L-a4f04a586b/bison_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F44P50K5L-a4f04a586b/bison_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F44P50K5L-a4f04a586b/bison_160.png",
            "original_w": 600,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F44P50K5L/bison.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F43CKNA57",
            "timestamp": 1486764207,
            "name": "Pasted image at 2017_02_10 03_03 PM.png",
            "title": "Pasted image at 2017-02-10, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F43CKNA57/pasted_image_at_2017_02_10_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F43CKNA57/download/pasted_image_at_2017_02_10_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F43CKNA57-9e228ce74e/pasted_image_at_2017_02_10_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F43CKNA57-9e228ce74e/pasted_image_at_2017_02_10_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F43CKNA57-9e228ce74e/pasted_image_at_2017_02_10_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F43CKNA57-9e228ce74e/pasted_image_at_2017_02_10_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F43CKNA57-9e228ce74e/pasted_image_at_2017_02_10_03_03_pm_1024.png",
            "original_w": 1335,
            "original_h": 848,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F43CKNA57/pasted_image_at_2017_02_10_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F445EUM3N",
            "timestamp": 1486764203,
            "name": "Screen Shot 2017-02-10 at 3.02.52 PM.png",
            "title": "Screen Shot 2017-02-10 at 3.02.52 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F445EUM3N/screen_shot_2017-02-10_at_3.02.52_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F445EUM3N/download/screen_shot_2017-02-10_at_3.02.52_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F445EUM3N-004c57bf6d/screen_shot_2017-02-10_at_3.02.52_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F445EUM3N-004c57bf6d/screen_shot_2017-02-10_at_3.02.52_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F445EUM3N-004c57bf6d/screen_shot_2017-02-10_at_3.02.52_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F445EUM3N-004c57bf6d/screen_shot_2017-02-10_at_3.02.52_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F445EUM3N-004c57bf6d/screen_shot_2017-02-10_at_3.02.52_pm_1024.png",
            "original_w": 1948,
            "original_h": 1410,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F445EUM3N/screen_shot_2017-02-10_at_3.02.52_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "moyai",
                    "users": [
                        "U2G1VV7AR"
                    ],
                    "count": 1
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F43BS0ND6",
            "timestamp": 1486764199,
            "name": "Pasted image at 2017_02_10 03_03 PM.png",
            "title": "Pasted image at 2017-02-10, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F43BS0ND6/pasted_image_at_2017_02_10_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F43BS0ND6/download/pasted_image_at_2017_02_10_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F43BS0ND6-3095b0fc6b/pasted_image_at_2017_02_10_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F43BS0ND6-3095b0fc6b/pasted_image_at_2017_02_10_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F43BS0ND6-3095b0fc6b/pasted_image_at_2017_02_10_03_03_pm_160.png",
            "original_w": 638,
            "original_h": 607,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F43BS0ND6/pasted_image_at_2017_02_10_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "thinking_face",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F43BRQLAU",
            "timestamp": 1486764186,
            "name": "Pasted image at 2017_02_10 03_03 PM.png",
            "title": "Pasted image at 2017-02-10, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F43BRQLAU/pasted_image_at_2017_02_10_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F43BRQLAU/download/pasted_image_at_2017_02_10_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F43BRQLAU-5d984ad060/pasted_image_at_2017_02_10_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F43BRQLAU-5d984ad060/pasted_image_at_2017_02_10_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F43BRQLAU-5d984ad060/pasted_image_at_2017_02_10_03_03_pm_160.png",
            "original_w": 579,
            "original_h": 395,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F43BRQLAU/pasted_image_at_2017_02_10_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F44P4GSQN",
            "timestamp": 1486764171,
            "name": "Pasted image at 2017_02_10 03_02 PM.png",
            "title": "Pasted image at 2017-02-10, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2QUK00RK",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F44P4GSQN/pasted_image_at_2017_02_10_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F44P4GSQN/download/pasted_image_at_2017_02_10_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F44P4GSQN-1a89ff766a/pasted_image_at_2017_02_10_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F44P4GSQN-1a89ff766a/pasted_image_at_2017_02_10_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F44P4GSQN-1a89ff766a/pasted_image_at_2017_02_10_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F44P4GSQN-1a89ff766a/pasted_image_at_2017_02_10_03_02_pm_720.png",
            "original_w": 763,
            "original_h": 712,
            "permalink": "https://appdirect.slack.com/files/james.mactavish/F44P4GSQN/pasted_image_at_2017_02_10_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F445EHNGL",
            "timestamp": 1486764158,
            "name": "Pasted image at 2017_02_10 03_02 PM.png",
            "title": "whatthebison",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F445EHNGL/pasted_image_at_2017_02_10_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F445EHNGL/download/pasted_image_at_2017_02_10_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F445EHNGL-8b2bbbeedb/pasted_image_at_2017_02_10_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F445EHNGL-8b2bbbeedb/pasted_image_at_2017_02_10_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F445EHNGL-8b2bbbeedb/pasted_image_at_2017_02_10_03_02_pm_160.png",
            "original_w": 614,
            "original_h": 512,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F445EHNGL/pasted_image_at_2017_02_10_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U211SR63A",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "heart",
                    "users": [
                        "U1000HJ8H",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F445R1PGD",
            "timestamp": 1486764131,
            "name": "Screen Shot 2017-02-10 at 2.01.51 PM.png",
            "title": "moooo",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F445R1PGD/screen_shot_2017-02-10_at_2.01.51_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F445R1PGD/download/screen_shot_2017-02-10_at_2.01.51_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F445R1PGD-e51180672c/screen_shot_2017-02-10_at_2.01.51_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F445R1PGD-e51180672c/screen_shot_2017-02-10_at_2.01.51_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F445R1PGD-e51180672c/screen_shot_2017-02-10_at_2.01.51_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F445R1PGD-e51180672c/screen_shot_2017-02-10_at_2.01.51_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F445R1PGD-e51180672c/screen_shot_2017-02-10_at_2.01.51_pm_1024.png",
            "original_w": 1154,
            "original_h": 1002,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F445R1PGD/screen_shot_2017-02-10_at_2.01.51_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U1000HJ8H",
                        "U211SR63A",
                        "U2HN6FYRM",
                        "U2D7F59RU",
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 6
                },
                {
                    "name": "beers",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F445QUVKP",
            "timestamp": 1486764122,
            "name": "Screen Shot 2017-02-10 at 3.01.48 PM.png",
            "title": "Screen Shot 2017-02-10 at 3.01.48 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F445QUVKP/screen_shot_2017-02-10_at_3.01.48_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F445QUVKP/download/screen_shot_2017-02-10_at_3.01.48_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F445QUVKP-fb0b6e7e97/screen_shot_2017-02-10_at_3.01.48_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F445QUVKP-fb0b6e7e97/screen_shot_2017-02-10_at_3.01.48_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F445QUVKP-fb0b6e7e97/screen_shot_2017-02-10_at_3.01.48_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F445QUVKP-fb0b6e7e97/screen_shot_2017-02-10_at_3.01.48_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F445QUVKP-fb0b6e7e97/screen_shot_2017-02-10_at_3.01.48_pm_1024.png",
            "original_w": 1710,
            "original_h": 1172,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F445QUVKP/screen_shot_2017-02-10_at_3.01.48_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "crossed_swords",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F44135DTM",
            "timestamp": 1486764074,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F44135DTM/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F44135DTM/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F44135DTM-7392f52760/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F44135DTM-7392f52760/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F44135DTM-7392f52760/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F44135DTM-7392f52760/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F44135DTM-7392f52760/drawing_1024.jpg",
            "original_w": 1141,
            "original_h": 588,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F44135DTM/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F41HM243G",
            "timestamp": 1486159549,
            "name": "cow.png",
            "title": "cow.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F41HM243G/cow.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F41HM243G/download/cow.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F41HM243G-a1c37ddcc1/cow_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F41HM243G-a1c37ddcc1/cow_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F41HM243G-a1c37ddcc1/cow_160.png",
            "original_w": 640,
            "original_h": 400,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F41HM243G/cow.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2G4XKRRU",
                        "U1000HJ8H",
                        "U1324MZRS",
                        "U21BYUQ1Z"
                    ],
                    "count": 4
                },
                {
                    "name": "+1::skin-tone-3",
                    "users": [
                        "U2G4XKRRU",
                        "U0B6XFXQE",
                        "U1324MZRS"
                    ],
                    "count": 3
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "baby_bottle",
                    "users": [
                        "U0ZV9NY93",
                        "U1324MZRS",
                        "U1000HJ8H",
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 5
                }
            ]
        },
        {
            "id": "F4107GLCV",
            "timestamp": 1486159507,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2RS6CKRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4107GLCV/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4107GLCV/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4107GLCV-87a55e8fbd/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4107GLCV-87a55e8fbd/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4107GLCV-87a55e8fbd/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4107GLCV-87a55e8fbd/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4107GLCV-87a55e8fbd/drawing_1024.jpg",
            "original_w": 1143,
            "original_h": 708,
            "permalink": "https://appdirect.slack.com/files/mark.willoughby/F4107GLCV/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "dart",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4068KW7J",
            "timestamp": 1486159451,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4068KW7J/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4068KW7J/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4068KW7J-80b797c5c1/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4068KW7J-80b797c5c1/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4068KW7J-80b797c5c1/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4068KW7J-80b797c5c1/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4068KW7J-80b797c5c1/drawing_1024.png",
            "original_w": 1215,
            "original_h": 716,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F4068KW7J/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "horse",
                    "users": [
                        "U08P10WPQ",
                        "U1000HJ8H",
                        "U1324MZRS",
                        "U2HN6FYRM",
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 6
                }
            ]
        },
        {
            "id": "F41HLELR4",
            "timestamp": 1486159448,
            "name": "Screen Shot 2017-02-03 at 3.03.48 PM.png",
            "title": "Screen Shot 2017-02-03 at 3.03.48 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F41HLELR4/screen_shot_2017-02-03_at_3.03.48_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F41HLELR4/download/screen_shot_2017-02-03_at_3.03.48_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F41HLELR4-1a047de614/screen_shot_2017-02-03_at_3.03.48_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F41HLELR4-1a047de614/screen_shot_2017-02-03_at_3.03.48_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F41HLELR4-1a047de614/screen_shot_2017-02-03_at_3.03.48_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F41HLELR4-1a047de614/screen_shot_2017-02-03_at_3.03.48_pm_720.png",
            "original_w": 766,
            "original_h": 474,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F41HLELR4/screen_shot_2017-02-03_at_3.03.48_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 3,
            "initial_comment": {
                "id": "Fc40R09ANP",
                "timestamp": 1486159448,
                "user": "U21BYUQ1Z",
                "is_intro": true,
                "comment": "I am a cow"
            },
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U0ZV9NY93",
                        "U2CL304CW",
                        "U27DJ3JT0",
                        "U2A6BJ71Q",
                        "U2DU3TZL7",
                        "U1000HJ8H",
                        "U13FJA80G",
                        "U2G4XKRRU"
                    ],
                    "count": 8
                },
                {
                    "name": "cow",
                    "users": [
                        "U2PG17XKJ",
                        "U27DJ3JT0",
                        "U13FJA80G",
                        "U2G4XKRRU",
                        "U08P10WPQ"
                    ],
                    "count": 5
                },
                {
                    "name": "hamburger",
                    "users": [
                        "U2A3TTW4V",
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4071FHT3",
            "timestamp": 1486159443,
            "name": "Pasted image at 2017_02_03 03_04 PM.png",
            "title": "Pasted image at 2017-02-03, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4071FHT3/pasted_image_at_2017_02_03_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4071FHT3/download/pasted_image_at_2017_02_03_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4071FHT3-8b2e6e8a7b/pasted_image_at_2017_02_03_03_04_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4071FHT3-8b2e6e8a7b/pasted_image_at_2017_02_03_03_04_pm_160.png",
            "original_w": 467,
            "original_h": 276,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F4071FHT3/pasted_image_at_2017_02_03_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "sheep",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "cow",
                    "users": [
                        "U27DJ3JT0"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4068GYP2",
            "timestamp": 1486159433,
            "name": "Pasted image at 2017_02_03 03_03 PM.png",
            "title": "Pasted image at 2017-02-03, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4068GYP2/pasted_image_at_2017_02_03_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4068GYP2/download/pasted_image_at_2017_02_03_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4068GYP2-89d41da862/pasted_image_at_2017_02_03_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4068GYP2-89d41da862/pasted_image_at_2017_02_03_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4068GYP2-89d41da862/pasted_image_at_2017_02_03_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4068GYP2-89d41da862/pasted_image_at_2017_02_03_03_03_pm_720.png",
            "original_w": 853,
            "original_h": 426,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F4068GYP2/pasted_image_at_2017_02_03_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "dog2",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F40VB34PN",
            "timestamp": 1486159431,
            "name": "Pasted image at 2017_02_03 03_03 PM.png",
            "title": "gluten free",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F40VB34PN/pasted_image_at_2017_02_03_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F40VB34PN/download/pasted_image_at_2017_02_03_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F40VB34PN-d6fb414dcd/pasted_image_at_2017_02_03_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F40VB34PN-d6fb414dcd/pasted_image_at_2017_02_03_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F40VB34PN-d6fb414dcd/pasted_image_at_2017_02_03_03_03_pm_160.png",
            "original_w": 634,
            "original_h": 424,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F40VB34PN/pasted_image_at_2017_02_03_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U29KAMLAK",
                        "U2D7F59RU",
                        "U1324MZRS"
                    ],
                    "count": 3
                },
                {
                    "name": "monkey_face",
                    "users": [
                        "U0ZV9NY93",
                        "U2G4XKRRU",
                        "U1324MZRS"
                    ],
                    "count": 3
                },
                {
                    "name": "pig2",
                    "users": [
                        "U08P10WPQ",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "horse",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4071AVC1",
            "timestamp": 1486159414,
            "name": "Pasted image at 2017_02_03 03_03 PM.png",
            "title": "Pasted image at 2017-02-03, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4071AVC1/pasted_image_at_2017_02_03_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4071AVC1/download/pasted_image_at_2017_02_03_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4071AVC1-902bb87daa/pasted_image_at_2017_02_03_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4071AVC1-902bb87daa/pasted_image_at_2017_02_03_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4071AVC1-902bb87daa/pasted_image_at_2017_02_03_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4071AVC1-902bb87daa/pasted_image_at_2017_02_03_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4071AVC1-902bb87daa/pasted_image_at_2017_02_03_03_03_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F4071AVC1/pasted_image_at_2017_02_03_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "unamused",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                },
                {
                    "name": "piggy",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F4068CC4Q",
            "timestamp": 1486159407,
            "name": "Screen Shot 2017-02-03 at 3.03.14 PM.png",
            "title": "Screen Shot 2017-02-03 at 3.03.14 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4068CC4Q/screen_shot_2017-02-03_at_3.03.14_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4068CC4Q/download/screen_shot_2017-02-03_at_3.03.14_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4068CC4Q-7847b7cc11/screen_shot_2017-02-03_at_3.03.14_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4068CC4Q-7847b7cc11/screen_shot_2017-02-03_at_3.03.14_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4068CC4Q-7847b7cc11/screen_shot_2017-02-03_at_3.03.14_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4068CC4Q-7847b7cc11/screen_shot_2017-02-03_at_3.03.14_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4068CC4Q-7847b7cc11/screen_shot_2017-02-03_at_3.03.14_pm_1024.png",
            "original_w": 1862,
            "original_h": 1570,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F4068CC4Q/screen_shot_2017-02-03_at_3.03.14_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "surfer",
                    "users": [
                        "U1000HJ8H",
                        "U2G4XKRRU",
                        "U1324MZRS",
                        "U0B6XFXQE",
                        "U08P10WPQ",
                        "U27DJ3JT0",
                        "U2DU3TZL7"
                    ],
                    "count": 7
                }
            ]
        },
        {
            "id": "F4106V1UM",
            "timestamp": 1486159406,
            "name": "Drawing(6).png",
            "title": "Drawing(6).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4106V1UM/drawing_6_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4106V1UM/download/drawing_6_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4106V1UM-f874af8d0c/drawing_6__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4106V1UM-f874af8d0c/drawing_6__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4106V1UM-f874af8d0c/drawing_6__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4106V1UM-f874af8d0c/drawing_6__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4106V1UM-f874af8d0c/drawing_6__1024.png",
            "original_w": 1035,
            "original_h": 630,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F4106V1UM/drawing_6_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "hearts",
                    "users": [
                        "U0B52QL07",
                        "U1324MZRS",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F40T0QQDQ",
            "timestamp": 1486159386,
            "name": "Screen Shot 2017-02-03 at 3.02.51 PM.png",
            "title": "Screen Shot 2017-02-03 at 3.02.51 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F40T0QQDQ/screen_shot_2017-02-03_at_3.02.51_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F40T0QQDQ/download/screen_shot_2017-02-03_at_3.02.51_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F40T0QQDQ-ba6b8ab2fd/screen_shot_2017-02-03_at_3.02.51_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F40T0QQDQ-ba6b8ab2fd/screen_shot_2017-02-03_at_3.02.51_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F40T0QQDQ-ba6b8ab2fd/screen_shot_2017-02-03_at_3.02.51_pm_160.png",
            "original_w": 539,
            "original_h": 381,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F40T0QQDQ/screen_shot_2017-02-03_at_3.02.51_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "bat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F41HXQMF1",
            "timestamp": 1486159380,
            "name": "Pasted image at 2017_02_03 03_02 PM.png",
            "title": "Pasted image at 2017-02-03, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F41HXQMF1/pasted_image_at_2017_02_03_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F41HXQMF1/download/pasted_image_at_2017_02_03_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F41HXQMF1-9ebe1a2f23/pasted_image_at_2017_02_03_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F41HXQMF1-9ebe1a2f23/pasted_image_at_2017_02_03_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F41HXQMF1-9ebe1a2f23/pasted_image_at_2017_02_03_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F41HXQMF1-9ebe1a2f23/pasted_image_at_2017_02_03_03_02_pm_720.png",
            "original_w": 986,
            "original_h": 550,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F41HXQMF1/pasted_image_at_2017_02_03_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "bow",
                    "users": [
                        "U1324MZRS",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "cat2",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G",
                        "U0B52QL07"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F40687V4Y",
            "timestamp": 1486159379,
            "name": "Pasted image at 2017_02_03 03_02 PM.png",
            "title": "MOOOO",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F40687V4Y/pasted_image_at_2017_02_03_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F40687V4Y/download/pasted_image_at_2017_02_03_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F40687V4Y-2e67ee43ec/pasted_image_at_2017_02_03_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F40687V4Y-2e67ee43ec/pasted_image_at_2017_02_03_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F40687V4Y-2e67ee43ec/pasted_image_at_2017_02_03_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F40687V4Y-2e67ee43ec/pasted_image_at_2017_02_03_03_02_pm_720.png",
            "original_w": 750,
            "original_h": 509,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F40687V4Y/pasted_image_at_2017_02_03_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "dog2",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F40685VA4",
            "timestamp": 1486159367,
            "name": "Drawing (2).jpeg",
            "title": "Drawing (2).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U211SR63A",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F40685VA4/drawing__2_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F40685VA4/download/drawing__2_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F40685VA4-81c1771d3f/drawing__2__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F40685VA4-81c1771d3f/drawing__2__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F40685VA4-81c1771d3f/drawing__2__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F40685VA4-81c1771d3f/drawing__2__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F40685VA4-81c1771d3f/drawing__2__1024.jpg",
            "original_w": 1705,
            "original_h": 911,
            "permalink": "https://appdirect.slack.com/files/rita.bereski/F40685VA4/drawing__2_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2G4XKRRU",
                        "U0B6XFXQE",
                        "U0B52QL07"
                    ],
                    "count": 3
                },
                {
                    "name": "clap",
                    "users": [
                        "U1324MZRS",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "conga-parrot",
                    "users": [
                        "U29KAMLAK",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F40710R2M",
            "timestamp": 1486159353,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F40710R2M/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F40710R2M/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F40710R2M-8ea2c38f4b/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F40710R2M-8ea2c38f4b/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F40710R2M-8ea2c38f4b/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F40710R2M-8ea2c38f4b/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F40710R2M-8ea2c38f4b/drawing_1024.jpg",
            "original_w": 1141,
            "original_h": 588,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F40710R2M/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS"
                    ],
                    "count": 2
                },
                {
                    "name": "sheep",
                    "users": [
                        "U08P10WPQ",
                        "U1324MZRS"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F4070S0FK",
            "timestamp": 1486159329,
            "name": "Screen Shot 2017-02-03 at 3.01.40 PM.png",
            "title": "Screen Shot 2017-02-03 at 3.01.40 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F4070S0FK/screen_shot_2017-02-03_at_3.01.40_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F4070S0FK/download/screen_shot_2017-02-03_at_3.01.40_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F4070S0FK-4afce0e59c/screen_shot_2017-02-03_at_3.01.40_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F4070S0FK-4afce0e59c/screen_shot_2017-02-03_at_3.01.40_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F4070S0FK-4afce0e59c/screen_shot_2017-02-03_at_3.01.40_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F4070S0FK-4afce0e59c/screen_shot_2017-02-03_at_3.01.40_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F4070S0FK-4afce0e59c/screen_shot_2017-02-03_at_3.01.40_pm_1024.png",
            "original_w": 1974,
            "original_h": 1224,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F4070S0FK/screen_shot_2017-02-03_at_3.01.40_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "clap",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F41HKPGES",
            "timestamp": 1486159324,
            "name": "Pasted image at 2017_02_03 03_03 PM.png",
            "title": "Pasted image at 2017-02-03, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F41HKPGES/pasted_image_at_2017_02_03_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F41HKPGES/download/pasted_image_at_2017_02_03_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F41HKPGES-b74851ee36/pasted_image_at_2017_02_03_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F41HKPGES-b74851ee36/pasted_image_at_2017_02_03_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F41HKPGES-b74851ee36/pasted_image_at_2017_02_03_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F41HKPGES-b74851ee36/pasted_image_at_2017_02_03_03_03_pm_720.png",
            "original_w": 869,
            "original_h": 810,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F41HKPGES/pasted_image_at_2017_02_03_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2G4XKRRU",
                        "U29KAMLAK",
                        "U1324MZRS",
                        "U0ZV9NY93",
                        "U2DU3TZL7",
                        "U0B6XFXQE",
                        "U27CYR4BF"
                    ],
                    "count": 7
                },
                {
                    "name": "cow",
                    "users": [
                        "U08P10WPQ",
                        "U27DJ3JT0"
                    ],
                    "count": 2
                },
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3YBET37H",
            "timestamp": 1485555710,
            "name": "IMG_20151228_160854.jpg",
            "title": "IMG_20151228_160854.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3YBET37H/img_20151228_160854.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3YBET37H/download/img_20151228_160854.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3YBET37H-daca54b4e3/img_20151228_160854_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3YBET37H-daca54b4e3/img_20151228_160854_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3YBET37H-daca54b4e3/img_20151228_160854_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3YBET37H-daca54b4e3/img_20151228_160854_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3YBET37H-daca54b4e3/img_20151228_160854_1024.jpg",
            "original_w": 2448,
            "original_h": 3264,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F3YBET37H/img_20151228_160854.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F3X0EFXUH",
            "timestamp": 1485555078,
            "name": "Pasted image at 2017_01_27 03_11 PM.png",
            "title": "Pasted image at 2017-01-27, 3:11 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3X0EFXUH/pasted_image_at_2017_01_27_03_11_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3X0EFXUH/download/pasted_image_at_2017_01_27_03_11_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3X0EFXUH-a8ebd9d4ec/pasted_image_at_2017_01_27_03_11_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3X0EFXUH-a8ebd9d4ec/pasted_image_at_2017_01_27_03_11_pm_160.png",
            "original_w": 323,
            "original_h": 400,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F3X0EFXUH/pasted_image_at_2017_01_27_03_11_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F3YB8G6BH",
            "timestamp": 1485554801,
            "name": "Pasted image at 2017_01_27 03_06 PM.png",
            "title": "sock puppets?",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3YB8G6BH/pasted_image_at_2017_01_27_03_06_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3YB8G6BH/download/pasted_image_at_2017_01_27_03_06_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3YB8G6BH-ae2627eebf/pasted_image_at_2017_01_27_03_06_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3YB8G6BH-ae2627eebf/pasted_image_at_2017_01_27_03_06_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3YB8G6BH-ae2627eebf/pasted_image_at_2017_01_27_03_06_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3YB8G6BH-ae2627eebf/pasted_image_at_2017_01_27_03_06_pm_720.png",
            "original_w": 1007,
            "original_h": 890,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F3YB8G6BH/pasted_image_at_2017_01_27_03_06_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "octopus",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3X0BV9U1",
            "timestamp": 1485554728,
            "name": "unicorn.png",
            "title": "unicorn.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3X0BV9U1/unicorn.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3X0BV9U1/download/unicorn.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3X0BV9U1-89938f9072/unicorn_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3X0BV9U1-89938f9072/unicorn_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3X0BV9U1-89938f9072/unicorn_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3X0BV9U1-89938f9072/unicorn_720.png",
            "original_w": 800,
            "original_h": 800,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F3X0BV9U1/unicorn.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "the_horns",
                    "users": [
                        "U2KRMJ9MM",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                },
                {
                    "name": "fire",
                    "users": [
                        "U2A3TTW4V",
                        "U2A6BJ71Q",
                        "U2G4XKRRU"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F3WUYLU9E",
            "timestamp": 1485554722,
            "name": "Screen Shot 2017-01-27 at 3.05.01 PM.png",
            "title": "Screen Shot 2017-01-27 at 3.05.01 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3WUYLU9E/screen_shot_2017-01-27_at_3.05.01_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3WUYLU9E/download/screen_shot_2017-01-27_at_3.05.01_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3WUYLU9E-ded6d209e7/screen_shot_2017-01-27_at_3.05.01_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3WUYLU9E-ded6d209e7/screen_shot_2017-01-27_at_3.05.01_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3WUYLU9E-ded6d209e7/screen_shot_2017-01-27_at_3.05.01_pm_160.png",
            "original_w": 524,
            "original_h": 492,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F3WUYLU9E/screen_shot_2017-01-27_at_3.05.01_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "smile",
                    "users": [
                        "U2ASS8TEH"
                    ],
                    "count": 1
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3XLB92V8",
            "timestamp": 1485554698,
            "name": "Pasted image at 2017_01_27 03_04 PM.png",
            "title": "Pasted image at 2017-01-27, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3XLB92V8/pasted_image_at_2017_01_27_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3XLB92V8/download/pasted_image_at_2017_01_27_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3XLB92V8-d567782184/pasted_image_at_2017_01_27_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3XLB92V8-d567782184/pasted_image_at_2017_01_27_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3XLB92V8-d567782184/pasted_image_at_2017_01_27_03_04_pm_160.png",
            "original_w": 533,
            "original_h": 432,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F3XLB92V8/pasted_image_at_2017_01_27_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "evergreen_tree",
                    "users": [
                        "U1324MZRS",
                        "U27DJ3JT0"
                    ],
                    "count": 2
                },
                {
                    "name": "joy",
                    "users": [
                        "U0ZV27VBQ",
                        "U2ASS8TEH",
                        "U2G4XKRRU",
                        "U08P10WPQ"
                    ],
                    "count": 4
                },
                {
                    "name": "corn",
                    "users": [
                        "U2PKVNC87",
                        "U2CL304CW",
                        "U08P10WPQ",
                        "U27DJ3JT0",
                        "U2HN6FYRM"
                    ],
                    "count": 5
                }
            ]
        },
        {
            "id": "F3WUYAL3S",
            "timestamp": 1485554680,
            "name": "Pasted image at 2017_01_27 03_04 PM.png",
            "title": "Alhandra",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3WUYAL3S/pasted_image_at_2017_01_27_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3WUYAL3S/download/pasted_image_at_2017_01_27_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3WUYAL3S-8c6b1f7f43/pasted_image_at_2017_01_27_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3WUYAL3S-8c6b1f7f43/pasted_image_at_2017_01_27_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3WUYAL3S-8c6b1f7f43/pasted_image_at_2017_01_27_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3WUYAL3S-8c6b1f7f43/pasted_image_at_2017_01_27_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3WUYAL3S-8c6b1f7f43/pasted_image_at_2017_01_27_03_04_pm_1024.png",
            "original_w": 1099,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F3WUYAL3S/pasted_image_at_2017_01_27_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "icecream",
                    "users": [
                        "U1324MZRS",
                        "U2HN6FYRM",
                        "U08P10WPQ"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F3XNWHTRT",
            "timestamp": 1485554676,
            "name": "Drawing(4).jpeg",
            "title": "Drawing(4).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3XNWHTRT/drawing_4_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3XNWHTRT/download/drawing_4_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3XNWHTRT-b2bf999d97/drawing_4__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3XNWHTRT-b2bf999d97/drawing_4__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3XNWHTRT-b2bf999d97/drawing_4__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3XNWHTRT-b2bf999d97/drawing_4__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3XNWHTRT-b2bf999d97/drawing_4__1024.jpg",
            "original_w": 1035,
            "original_h": 630,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F3XNWHTRT/drawing_4_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F3YAWAK3Q",
            "timestamp": 1485554675,
            "name": "Drawing (1).jpeg",
            "title": "Drawing (1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U211SR63A",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3YAWAK3Q/drawing__1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3YAWAK3Q/download/drawing__1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3YAWAK3Q-a962c682ba/drawing__1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3YAWAK3Q-a962c682ba/drawing__1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3YAWAK3Q-a962c682ba/drawing__1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3YAWAK3Q-a962c682ba/drawing__1__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3YAWAK3Q-a962c682ba/drawing__1__1024.jpg",
            "original_w": 1490,
            "original_h": 964,
            "permalink": "https://appdirect.slack.com/files/rita.bereski/F3YAWAK3Q/drawing__1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart_eyes_cat",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3XNWEL85",
            "timestamp": 1485554657,
            "name": "Pasted image at 2017_01_27 03_04 PM.png",
            "title": "Pasted image at 2017-01-27, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3XNWEL85/pasted_image_at_2017_01_27_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3XNWEL85/download/pasted_image_at_2017_01_27_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3XNWEL85-36712f1e0e/pasted_image_at_2017_01_27_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3XNWEL85-36712f1e0e/pasted_image_at_2017_01_27_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3XNWEL85-36712f1e0e/pasted_image_at_2017_01_27_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3XNWEL85-36712f1e0e/pasted_image_at_2017_01_27_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3XNWEL85-36712f1e0e/pasted_image_at_2017_01_27_03_04_pm_1024.png",
            "original_w": 1062,
            "original_h": 598,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F3XNWEL85/pasted_image_at_2017_01_27_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "cow2",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3YB7D3CP",
            "timestamp": 1485554653,
            "name": "Drawing (5).png",
            "title": "Drawing (5).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3YB7D3CP/drawing__5_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3YB7D3CP/download/drawing__5_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3YB7D3CP-53b747901a/drawing__5__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3YB7D3CP-53b747901a/drawing__5__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3YB7D3CP-53b747901a/drawing__5__160.png",
            "original_w": 586,
            "original_h": 471,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F3YB7D3CP/drawing__5_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "sports_medal",
                    "users": [
                        "U2PKVNC87",
                        "U29KAMLAK",
                        "U2CL304CW",
                        "U2A6BJ71Q",
                        "U2PG17XKJ",
                        "U2DU3TZL7",
                        "U27DJ3JT0",
                        "U2HN6FYRM"
                    ],
                    "count": 8
                },
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW",
                        "U27DJ3JT0",
                        "U2HN6FYRM"
                    ],
                    "count": 3
                },
                {
                    "name": "trophy",
                    "users": [
                        "U2DU3TZL7",
                        "U2HN6FYRM",
                        "U0ZV9NY93"
                    ],
                    "count": 3
                },
                {
                    "name": "rainbow",
                    "users": [
                        "U2PKVNC87",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                },
                {
                    "name": "unicorn_face",
                    "users": [
                        "U08P10WPQ",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3X0BABC1",
            "timestamp": 1485554649,
            "name": "Pasted image at 2017_01_27 03_04 PM.png",
            "title": "Pasted image at 2017-01-27, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3X0BABC1/pasted_image_at_2017_01_27_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3X0BABC1/download/pasted_image_at_2017_01_27_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3X0BABC1-91ed4fd036/pasted_image_at_2017_01_27_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3X0BABC1-91ed4fd036/pasted_image_at_2017_01_27_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3X0BABC1-91ed4fd036/pasted_image_at_2017_01_27_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3X0BABC1-91ed4fd036/pasted_image_at_2017_01_27_03_04_pm_720.png",
            "original_w": 894,
            "original_h": 697,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F3X0BABC1/pasted_image_at_2017_01_27_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "haircut",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3XJ9TBQB",
            "timestamp": 1485554606,
            "name": "Screen Shot 2017-01-27 at 3.03.05 PM.png",
            "title": "Screen Shot 2017-01-27 at 3.03.05 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3XJ9TBQB/screen_shot_2017-01-27_at_3.03.05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3XJ9TBQB/download/screen_shot_2017-01-27_at_3.03.05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3XJ9TBQB-0c80956ad5/screen_shot_2017-01-27_at_3.03.05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3XJ9TBQB-0c80956ad5/screen_shot_2017-01-27_at_3.03.05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3XJ9TBQB-0c80956ad5/screen_shot_2017-01-27_at_3.03.05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3XJ9TBQB-0c80956ad5/screen_shot_2017-01-27_at_3.03.05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3XJ9TBQB-0c80956ad5/screen_shot_2017-01-27_at_3.03.05_pm_1024.png",
            "original_w": 876,
            "original_h": 1046,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F3XJ9TBQB/screen_shot_2017-01-27_at_3.03.05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "hatched_chick",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3WUXKDRN",
            "timestamp": 1485554591,
            "name": "Pasted image at 2017_01_27 03_03 PM.png",
            "title": "ran out of time",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3WUXKDRN/pasted_image_at_2017_01_27_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3WUXKDRN/download/pasted_image_at_2017_01_27_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXKDRN-1a79eefd3d/pasted_image_at_2017_01_27_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXKDRN-1a79eefd3d/pasted_image_at_2017_01_27_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXKDRN-1a79eefd3d/pasted_image_at_2017_01_27_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXKDRN-1a79eefd3d/pasted_image_at_2017_01_27_03_03_pm_720.png",
            "original_w": 733,
            "original_h": 342,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F3WUXKDRN/pasted_image_at_2017_01_27_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ant",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3WUXHASU",
            "timestamp": 1485554586,
            "name": "Screen Shot 2017-01-27 at 3.02.56 PM.png",
            "title": "Screen Shot 2017-01-27 at 3.02.56 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3WUXHASU/screen_shot_2017-01-27_at_3.02.56_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3WUXHASU/download/screen_shot_2017-01-27_at_3.02.56_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXHASU-787a6528c2/screen_shot_2017-01-27_at_3.02.56_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXHASU-787a6528c2/screen_shot_2017-01-27_at_3.02.56_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXHASU-787a6528c2/screen_shot_2017-01-27_at_3.02.56_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXHASU-787a6528c2/screen_shot_2017-01-27_at_3.02.56_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXHASU-787a6528c2/screen_shot_2017-01-27_at_3.02.56_pm_1024.png",
            "original_w": 1808,
            "original_h": 1020,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F3WUXHASU/screen_shot_2017-01-27_at_3.02.56_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "hankey",
                    "users": [
                        "U1324MZRS",
                        "U29KAMLAK",
                        "U2PG17XKJ"
                    ],
                    "count": 3
                },
                {
                    "name": "elephant",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3WUXEE00",
            "timestamp": 1485554569,
            "name": "Drawing (2).jpeg",
            "title": "Drawing (2).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3WUXEE00/drawing__2_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3WUXEE00/download/drawing__2_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXEE00-c0cc5ac7b2/drawing__2__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXEE00-c0cc5ac7b2/drawing__2__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXEE00-c0cc5ac7b2/drawing__2__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXEE00-c0cc5ac7b2/drawing__2__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3WUXEE00-c0cc5ac7b2/drawing__2__1024.jpg",
            "original_w": 1695,
            "original_h": 851,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F3WUXEE00/drawing__2_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "hankey",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "rainbow",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3V709RBQ",
            "timestamp": 1484951121,
            "name": "Drawing(3).jpeg",
            "title": "I",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3V709RBQ/drawing_3_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3V709RBQ/download/drawing_3_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3V709RBQ-62878f4a71/drawing_3__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3V709RBQ-62878f4a71/drawing_3__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3V709RBQ-62878f4a71/drawing_3__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3V709RBQ-62878f4a71/drawing_3__720.jpg",
            "original_w": 1015,
            "original_h": 659,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F3V709RBQ/drawing_3_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc3UGF6W66",
                "timestamp": 1484951121,
                "user": "U08P10WPQ",
                "is_intro": true,
                "comment": "Today I learned how to fill with colour... prepare to be bedazzled with colour next week!"
            }
        },
        {
            "id": "F3UE6SJKV",
            "timestamp": 1484950021,
            "name": "SHSquirrel.png",
            "title": "SHSquirrel.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL6JEQN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3UE6SJKV/shsquirrel.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3UE6SJKV/download/shsquirrel.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3UE6SJKV-7079384ef1/shsquirrel_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3UE6SJKV-7079384ef1/shsquirrel_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3UE6SJKV-7079384ef1/shsquirrel_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3UE6SJKV-7079384ef1/shsquirrel_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3UE6SJKV-7079384ef1/shsquirrel_1024.png",
            "original_w": 1346,
            "original_h": 671,
            "permalink": "https://appdirect.slack.com/files/steve.hansensmythe/F3UE6SJKV/shsquirrel.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "squirrel",
                    "users": [
                        "U2KRMJ9MM"
                    ],
                    "count": 1
                },
                {
                    "name": "no_entry_sign",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "smiley",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3UJSD5HT",
            "timestamp": 1484949934,
            "name": "Pasted image at 2017_01_20 03_05 PM.png",
            "title": "Pasted image at 2017-01-20, 3:05 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3UJSD5HT/pasted_image_at_2017_01_20_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3UJSD5HT/download/pasted_image_at_2017_01_20_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3UJSD5HT-3ef5453cbc/pasted_image_at_2017_01_20_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3UJSD5HT-3ef5453cbc/pasted_image_at_2017_01_20_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3UJSD5HT-3ef5453cbc/pasted_image_at_2017_01_20_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3UJSD5HT-3ef5453cbc/pasted_image_at_2017_01_20_03_05_pm_720.png",
            "original_w": 733,
            "original_h": 702,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F3UJSD5HT/pasted_image_at_2017_01_20_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "wrench",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "chestnut",
                    "users": [
                        "U2G1VV7AR",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3V72KTU7",
            "timestamp": 1484949858,
            "name": "Pasted image at 2017_01_20 03_04 PM.png",
            "title": "Pasted image at 2017-01-20, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3V72KTU7/pasted_image_at_2017_01_20_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3V72KTU7/download/pasted_image_at_2017_01_20_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3V72KTU7-7654b29b46/pasted_image_at_2017_01_20_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3V72KTU7-7654b29b46/pasted_image_at_2017_01_20_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3V72KTU7-7654b29b46/pasted_image_at_2017_01_20_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3V72KTU7-7654b29b46/pasted_image_at_2017_01_20_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3V72KTU7-7654b29b46/pasted_image_at_2017_01_20_03_04_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F3V72KTU7/pasted_image_at_2017_01_20_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "balloon",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3UJRQWDT",
            "timestamp": 1484949853,
            "name": "squirrel.png",
            "title": "squirrel.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3UJRQWDT/squirrel.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3UJRQWDT/download/squirrel.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRQWDT-514d0892ab/squirrel_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRQWDT-514d0892ab/squirrel_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRQWDT-514d0892ab/squirrel_160.png",
            "original_w": 519,
            "original_h": 345,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F3UJRQWDT/squirrel.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "skull",
                    "users": [
                        "U0ZV9NY93",
                        "U13FJA80G",
                        "U2A658R7U"
                    ],
                    "count": 3
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "airplane",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3TRLVDCH",
            "timestamp": 1484949849,
            "name": "Screen Shot 2017-01-20 at 3.03.42 PM.png",
            "title": "Screen Shot 2017-01-20 at 3.03.42 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3TRLVDCH/screen_shot_2017-01-20_at_3.03.42_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3TRLVDCH/download/screen_shot_2017-01-20_at_3.03.42_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLVDCH-7283ec1dfc/screen_shot_2017-01-20_at_3.03.42_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLVDCH-7283ec1dfc/screen_shot_2017-01-20_at_3.03.42_pm_160.png",
            "original_w": 447,
            "original_h": 428,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F3TRLVDCH/screen_shot_2017-01-20_at_3.03.42_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc3UG6GNNN",
                "timestamp": 1484949849,
                "user": "U21BYUQ1Z",
                "is_intro": true,
                "comment": "Squirrel (peanut butter face)"
            },
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2CL304CW",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "ok_hand",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "point_up",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3UE5HJLB",
            "timestamp": 1484949838,
            "name": "Screen Shot 2017-01-20 at 11.02.53 PM.png",
            "title": "Screen Shot 2017-01-20 at 11.02.53 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3UE5HJLB/screen_shot_2017-01-20_at_11.02.53_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3UE5HJLB/download/screen_shot_2017-01-20_at_11.02.53_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3UE5HJLB-10feac1ed4/screen_shot_2017-01-20_at_11.02.53_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3UE5HJLB-10feac1ed4/screen_shot_2017-01-20_at_11.02.53_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3UE5HJLB-10feac1ed4/screen_shot_2017-01-20_at_11.02.53_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3UE5HJLB-10feac1ed4/screen_shot_2017-01-20_at_11.02.53_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3UE5HJLB-10feac1ed4/screen_shot_2017-01-20_at_11.02.53_pm_1024.png",
            "original_w": 1480,
            "original_h": 1316,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F3UE5HJLB/screen_shot_2017-01-20_at_11.02.53_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F3UJRK0AH",
            "timestamp": 1484949828,
            "name": "Pasted image at 2017_01_20 03_03 PM.png",
            "title": "idk anymore",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3UJRK0AH/pasted_image_at_2017_01_20_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3UJRK0AH/download/pasted_image_at_2017_01_20_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRK0AH-b0c30e3c02/pasted_image_at_2017_01_20_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRK0AH-b0c30e3c02/pasted_image_at_2017_01_20_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRK0AH-b0c30e3c02/pasted_image_at_2017_01_20_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRK0AH-b0c30e3c02/pasted_image_at_2017_01_20_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRK0AH-b0c30e3c02/pasted_image_at_2017_01_20_03_03_pm_1024.png",
            "original_w": 1070,
            "original_h": 673,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F3UJRK0AH/pasted_image_at_2017_01_20_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "smirk_cat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3TRLR109",
            "timestamp": 1484949825,
            "name": "Pasted image at 2017_01_20 03_03 PM.png",
            "title": "curling squirrelling",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3TRLR109/pasted_image_at_2017_01_20_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3TRLR109/download/pasted_image_at_2017_01_20_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLR109-3347b41fae/pasted_image_at_2017_01_20_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLR109-3347b41fae/pasted_image_at_2017_01_20_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLR109-3347b41fae/pasted_image_at_2017_01_20_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLR109-3347b41fae/pasted_image_at_2017_01_20_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLR109-3347b41fae/pasted_image_at_2017_01_20_03_03_pm_1024.png",
            "original_w": 1399,
            "original_h": 574,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F3TRLR109/pasted_image_at_2017_01_20_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "dart",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3UJRJBHT",
            "timestamp": 1484949823,
            "name": "Drawing(3).png",
            "title": "Drawing(3).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3UJRJBHT/drawing_3_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3UJRJBHT/download/drawing_3_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRJBHT-c78f0d64d4/drawing_3__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRJBHT-c78f0d64d4/drawing_3__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRJBHT-c78f0d64d4/drawing_3__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3UJRJBHT-c78f0d64d4/drawing_3__720.png",
            "original_w": 721,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F3UJRJBHT/drawing_3_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "deciduous_tree",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3TRLNBH7",
            "timestamp": 1484949808,
            "name": "Pasted image at 2017_01_20 03_03 PM.png",
            "title": "Pasted image at 2017-01-20, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3TRLNBH7/pasted_image_at_2017_01_20_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3TRLNBH7/download/pasted_image_at_2017_01_20_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLNBH7-135cb40260/pasted_image_at_2017_01_20_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLNBH7-135cb40260/pasted_image_at_2017_01_20_03_03_pm_160.png",
            "original_w": 463,
            "original_h": 298,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F3TRLNBH7/pasted_image_at_2017_01_20_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "horse",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "smiley_cat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3TRLF3UZ",
            "timestamp": 1484949786,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3TRLF3UZ/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3TRLF3UZ/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLF3UZ-9c39c35b25/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLF3UZ-9c39c35b25/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLF3UZ-9c39c35b25/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLF3UZ-9c39c35b25/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3TRLF3UZ-9c39c35b25/drawing_1024.jpg",
            "original_w": 1141,
            "original_h": 588,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F3TRLF3UZ/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "crossed_swords",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "chestnut",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3V6R3C6A",
            "timestamp": 1484949776,
            "name": "Drawing(5).png",
            "title": "Drawing(5).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3V6R3C6A/drawing_5_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3V6R3C6A/download/drawing_5_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3V6R3C6A-cac2014cfa/drawing_5__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3V6R3C6A-cac2014cfa/drawing_5__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3V6R3C6A-cac2014cfa/drawing_5__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3V6R3C6A-cac2014cfa/drawing_5__720.png",
            "original_w": 1015,
            "original_h": 659,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F3V6R3C6A/drawing_5_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2G1VV7AR",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                },
                {
                    "name": "hotdog",
                    "users": [
                        "U2G1VV7AR",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "joy",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3V6QVBKQ",
            "timestamp": 1484949754,
            "name": "Drawing By Teia Bereski.jpeg",
            "title": "Drawing By Teia Bereski.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U29KAMLAK",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3V6QVBKQ/drawing_by_teia_bereski.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3V6QVBKQ/download/drawing_by_teia_bereski.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3V6QVBKQ-7787c62f2a/drawing_by_teia_bereski_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3V6QVBKQ-7787c62f2a/drawing_by_teia_bereski_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3V6QVBKQ-7787c62f2a/drawing_by_teia_bereski_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3V6QVBKQ-7787c62f2a/drawing_by_teia_bereski_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3V6QVBKQ-7787c62f2a/drawing_by_teia_bereski_1024.jpg",
            "original_w": 1215,
            "original_h": 781,
            "permalink": "https://appdirect.slack.com/files/jennifer.aubin/F3V6QVBKQ/drawing_by_teia_bereski.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "trophy",
                    "users": [
                        "U27DJ3JT0",
                        "U2A658R7U"
                    ],
                    "count": 2
                },
                {
                    "name": "fire",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7",
                        "U2PG17XKJ"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F3S55PRFG",
            "timestamp": 1484345326,
            "name": "CzfhAxIUsAArY0Z.jpg-large.jpeg",
            "title": "This hedgehog is cheering for you because you can do anything",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3S55PRFG/czfhaxiusaary0z.jpg-large.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3S55PRFG/download/czfhaxiusaary0z.jpg-large.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3S55PRFG-ca0cbbd3d4/czfhaxiusaary0z.jpg-large_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3S55PRFG-ca0cbbd3d4/czfhaxiusaary0z.jpg-large_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3S55PRFG-ca0cbbd3d4/czfhaxiusaary0z.jpg-large_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3S55PRFG-ca0cbbd3d4/czfhaxiusaary0z.jpg-large_720.jpg",
            "original_w": 600,
            "original_h": 800,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F3S55PRFG/czfhaxiusaary0z.jpg-large.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U13FJA80G",
                        "U2A6BJ71Q",
                        "U08P10WPQ"
                    ],
                    "count": 3
                },
                {
                    "name": "laughing",
                    "users": [
                        "U27CJCFA9"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3S5FPV55",
            "timestamp": 1484345122,
            "name": "Drawing (4).jpg",
            "title": "Drawing (4).jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U27CJCFA9",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3S5FPV55/drawing__4_.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3S5FPV55/download/drawing__4_.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3S5FPV55-fcb7c7ea76/drawing__4__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3S5FPV55-fcb7c7ea76/drawing__4__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3S5FPV55-fcb7c7ea76/drawing__4__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3S5FPV55-fcb7c7ea76/drawing__4__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3S5FPV55-fcb7c7ea76/drawing__4__1024.jpg",
            "original_w": 1695,
            "original_h": 851,
            "permalink": "https://appdirect.slack.com/files/ethan.hawthorne/F3S5FPV55/drawing__4_.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "point_up",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3RCJN1EX",
            "timestamp": 1484345083,
            "name": "Screen Shot 2017-01-13 at 3.04.24 PM.png",
            "title": "Screen Shot 2017-01-13 at 3.04.24 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0B6XFXQE",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3RCJN1EX/screen_shot_2017-01-13_at_3.04.24_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3RCJN1EX/download/screen_shot_2017-01-13_at_3.04.24_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3RCJN1EX-03d6a5adab/screen_shot_2017-01-13_at_3.04.24_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3RCJN1EX-03d6a5adab/screen_shot_2017-01-13_at_3.04.24_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3RCJN1EX-03d6a5adab/screen_shot_2017-01-13_at_3.04.24_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3RCJN1EX-03d6a5adab/screen_shot_2017-01-13_at_3.04.24_pm_720.png",
            "original_w": 750,
            "original_h": 574,
            "permalink": "https://appdirect.slack.com/files/neil.grover/F3RCJN1EX/screen_shot_2017-01-13_at_3.04.24_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U211SR63A",
                        "U13FJA80G",
                        "U1000HJ8H",
                        "U2DU3TZL7"
                    ],
                    "count": 4
                },
                {
                    "name": "trollface",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3QQ07Y1X",
            "timestamp": 1484345071,
            "name": "Pasted image at 2017_01_13 03_04 PM.png",
            "title": "Hedgehog",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3QQ07Y1X/pasted_image_at_2017_01_13_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3QQ07Y1X/download/pasted_image_at_2017_01_13_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3QQ07Y1X-4aabe69f71/pasted_image_at_2017_01_13_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3QQ07Y1X-4aabe69f71/pasted_image_at_2017_01_13_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3QQ07Y1X-4aabe69f71/pasted_image_at_2017_01_13_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3QQ07Y1X-4aabe69f71/pasted_image_at_2017_01_13_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3QQ07Y1X-4aabe69f71/pasted_image_at_2017_01_13_03_04_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F3QQ07Y1X/pasted_image_at_2017_01_13_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "pencil2",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3RH47TFX",
            "timestamp": 1484345057,
            "name": "Screen Shot 2017-01-14 at 6.04.04 AM.png",
            "title": "Screen Shot 2017-01-14 at 6.04.04 AM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3RH47TFX/screen_shot_2017-01-14_at_6.04.04_am.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3RH47TFX/download/screen_shot_2017-01-14_at_6.04.04_am.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3RH47TFX-a4b00f7a4a/screen_shot_2017-01-14_at_6.04.04_am_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3RH47TFX-a4b00f7a4a/screen_shot_2017-01-14_at_6.04.04_am_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3RH47TFX-a4b00f7a4a/screen_shot_2017-01-14_at_6.04.04_am_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3RH47TFX-a4b00f7a4a/screen_shot_2017-01-14_at_6.04.04_am_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3RH47TFX-a4b00f7a4a/screen_shot_2017-01-14_at_6.04.04_am_1024.png",
            "original_w": 1242,
            "original_h": 774,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F3RH47TFX/screen_shot_2017-01-14_at_6.04.04_am.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3REJK6JW",
            "timestamp": 1484345037,
            "name": "Drawing (4).png",
            "title": "Drawing (4).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3REJK6JW/drawing__4_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3REJK6JW/download/drawing__4_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3REJK6JW-84d8c7f4bb/drawing__4__360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3REJK6JW-84d8c7f4bb/drawing__4__160.png",
            "original_w": 470,
            "original_h": 356,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F3REJK6JW/drawing__4_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart_eyes_cat",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3RCJB1MH",
            "timestamp": 1484345034,
            "name": "Screen Shot 2017-01-13 at 3.03.35 PM.png",
            "title": "Screen Shot 2017-01-13 at 3.03.35 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3RCJB1MH/screen_shot_2017-01-13_at_3.03.35_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3RCJB1MH/download/screen_shot_2017-01-13_at_3.03.35_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3RCJB1MH-0da645d1f2/screen_shot_2017-01-13_at_3.03.35_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3RCJB1MH-0da645d1f2/screen_shot_2017-01-13_at_3.03.35_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3RCJB1MH-0da645d1f2/screen_shot_2017-01-13_at_3.03.35_pm_160.png",
            "original_w": 617,
            "original_h": 374,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F3RCJB1MH/screen_shot_2017-01-13_at_3.03.35_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U211SR63A",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "cake",
                    "users": [
                        "U054FNLPS",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "clap",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "trophy",
                    "users": [
                        "U1000HJ8H",
                        "U13FJA80G",
                        "U2CL304CW"
                    ],
                    "count": 3
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3RGTMM1A",
            "timestamp": 1484345033,
            "name": "Pasted image at 2017_01_13 03_03 PM.png",
            "title": "Pasted image at 2017-01-13, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3RGTMM1A/pasted_image_at_2017_01_13_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3RGTMM1A/download/pasted_image_at_2017_01_13_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3RGTMM1A-c77880ff4c/pasted_image_at_2017_01_13_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3RGTMM1A-c77880ff4c/pasted_image_at_2017_01_13_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3RGTMM1A-c77880ff4c/pasted_image_at_2017_01_13_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3RGTMM1A-c77880ff4c/pasted_image_at_2017_01_13_03_03_pm_720.png",
            "original_w": 759,
            "original_h": 436,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F3RGTMM1A/pasted_image_at_2017_01_13_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3QP5TYMN",
            "timestamp": 1484345018,
            "name": "Screen Shot 2017-01-13 at 11.03.14 PM.png",
            "title": "Screen Shot 2017-01-13 at 11.03.14 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3QP5TYMN/screen_shot_2017-01-13_at_11.03.14_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3QP5TYMN/download/screen_shot_2017-01-13_at_11.03.14_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5TYMN-f32d6eebea/screen_shot_2017-01-13_at_11.03.14_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5TYMN-f32d6eebea/screen_shot_2017-01-13_at_11.03.14_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5TYMN-f32d6eebea/screen_shot_2017-01-13_at_11.03.14_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5TYMN-f32d6eebea/screen_shot_2017-01-13_at_11.03.14_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5TYMN-f32d6eebea/screen_shot_2017-01-13_at_11.03.14_pm_1024.png",
            "original_w": 1700,
            "original_h": 1556,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F3QP5TYMN/screen_shot_2017-01-13_at_11.03.14_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "scream",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3S53F830",
            "timestamp": 1484345002,
            "name": "Pasted image at 2017_01_13 03_03 PM.png",
            "title": "abstract AF",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3S53F830/pasted_image_at_2017_01_13_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3S53F830/download/pasted_image_at_2017_01_13_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3S53F830-8899f6e01c/pasted_image_at_2017_01_13_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3S53F830-8899f6e01c/pasted_image_at_2017_01_13_03_03_pm_160.png",
            "original_w": 423,
            "original_h": 388,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F3S53F830/pasted_image_at_2017_01_13_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U211SR63A",
                        "U2PKR3B2S",
                        "U2G4XKRRU",
                        "U2CL304CW",
                        "U1000HJ8H"
                    ],
                    "count": 5
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U211SR63A",
                        "U2PG17XKJ",
                        "U0ZV9NY93"
                    ],
                    "count": 3
                },
                {
                    "name": "heart_eyes",
                    "users": [
                        "U211SR63A",
                        "U0B52QL07",
                        "U2G4XKRRU"
                    ],
                    "count": 3
                },
                {
                    "name": "hushed",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "question",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "trophy",
                    "users": [
                        "U27CJCFA9"
                    ],
                    "count": 1
                },
                {
                    "name": "medal",
                    "users": [
                        "U27CJCFA9"
                    ],
                    "count": 1
                },
                {
                    "name": "cocktail",
                    "users": [
                        "U21BYUQ1Z"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3S53BU78",
            "timestamp": 1484344993,
            "name": "hedge_hog.png",
            "title": "hedge_hog.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3S53BU78/hedge_hog.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3S53BU78/download/hedge_hog.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3S53BU78-25269bd26a/hedge_hog_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3S53BU78-25269bd26a/hedge_hog_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3S53BU78-25269bd26a/hedge_hog_160.png",
            "original_w": 600,
            "original_h": 341,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F3S53BU78/hedge_hog.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "piggy",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "horse",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3REJ802E",
            "timestamp": 1484344988,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3REJ802E/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3REJ802E/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3REJ802E-9d03c3725f/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3REJ802E-9d03c3725f/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3REJ802E-9d03c3725f/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3REJ802E-9d03c3725f/drawing_720.png",
            "original_w": 721,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F3REJ802E/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2HN6FYRM",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U054FNLPS",
                        "U1324MZRS",
                        "U2PG17XKJ",
                        "U13FJA80G",
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 6
                },
                {
                    "name": "trophy",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3RGTB19A",
            "timestamp": 1484344987,
            "name": "Pasted image at 2017_01_13 03_03 PM.png",
            "title": "Pasted image at 2017-01-13, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3RGTB19A/pasted_image_at_2017_01_13_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3RGTB19A/download/pasted_image_at_2017_01_13_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3RGTB19A-e60a9d3253/pasted_image_at_2017_01_13_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3RGTB19A-e60a9d3253/pasted_image_at_2017_01_13_03_03_pm_160.png",
            "original_w": 366,
            "original_h": 242,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F3RGTB19A/pasted_image_at_2017_01_13_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "tada",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3QP5JE64",
            "timestamp": 1484344980,
            "name": "Screenshot_20170113-150149~2.png",
            "title": "Slack for Android Upload",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3QP5JE64/screenshot_20170113-150149_2.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3QP5JE64/download/screenshot_20170113-150149_2.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5JE64-14322a368b/screenshot_20170113-150149_2_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5JE64-14322a368b/screenshot_20170113-150149_2_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5JE64-14322a368b/screenshot_20170113-150149_2_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5JE64-14322a368b/screenshot_20170113-150149_2_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5JE64-14322a368b/screenshot_20170113-150149_2_1024.jpg",
            "original_w": 912,
            "original_h": 1153,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F3QP5JE64/screenshot_20170113-150149_2.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "heart_eyes_cat",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3RGT8H2Q",
            "timestamp": 1484344973,
            "name": "SONIC.jpg",
            "title": "SONIC the HEDGEHOG.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2PKR3B2S",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3RGT8H2Q/sonic.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3RGT8H2Q/download/sonic.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3RGT8H2Q-62b3aaf0b6/sonic_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3RGT8H2Q-62b3aaf0b6/sonic_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3RGT8H2Q-62b3aaf0b6/sonic_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3RGT8H2Q-62b3aaf0b6/sonic_720.jpg",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/darnell.shinbine/F3RGT8H2Q/sonic.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U1324MZRS",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                },
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3QP5G3TJ",
            "timestamp": 1484344966,
            "name": "Drawing(2).jpeg",
            "title": "Drawing(2).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3QP5G3TJ/drawing_2_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3QP5G3TJ/download/drawing_2_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5G3TJ-99c63cb7d7/drawing_2__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5G3TJ-99c63cb7d7/drawing_2__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5G3TJ-99c63cb7d7/drawing_2__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5G3TJ-99c63cb7d7/drawing_2__720.jpg",
            "original_w": 1015,
            "original_h": 666,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F3QP5G3TJ/drawing_2_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U27DJ3JT0"
                    ],
                    "count": 1
                },
                {
                    "name": "white_check_mark",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3QP5FJSC",
            "timestamp": 1484344962,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U211SR63A",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3QP5FJSC/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3QP5FJSC/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5FJSC-2ee765ffa7/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5FJSC-2ee765ffa7/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5FJSC-2ee765ffa7/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5FJSC-2ee765ffa7/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3QP5FJSC-2ee765ffa7/drawing_1024.jpg",
            "original_w": 1482,
            "original_h": 942,
            "permalink": "https://appdirect.slack.com/files/rita.bereski/F3QP5FJSC/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "intensity",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "heart_eyes_cat",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3QPZCHQ9",
            "timestamp": 1484344958,
            "name": "Screen Shot 2017-01-13 at 3.02.32 PM.png",
            "title": "Screen Shot 2017-01-13 at 3.02.32 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3QPZCHQ9/screen_shot_2017-01-13_at_3.02.32_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3QPZCHQ9/download/screen_shot_2017-01-13_at_3.02.32_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3QPZCHQ9-417f0b12ea/screen_shot_2017-01-13_at_3.02.32_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3QPZCHQ9-417f0b12ea/screen_shot_2017-01-13_at_3.02.32_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3QPZCHQ9-417f0b12ea/screen_shot_2017-01-13_at_3.02.32_pm_160.png",
            "original_w": 705,
            "original_h": 486,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F3QPZCHQ9/screen_shot_2017-01-13_at_3.02.32_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "pencil2",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3S52JKN2",
            "timestamp": 1484344885,
            "name": "Pasted image at 2017_01_13 03_01 PM.png",
            "title": "bam",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3S52JKN2/pasted_image_at_2017_01_13_03_01_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3S52JKN2/download/pasted_image_at_2017_01_13_03_01_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3S52JKN2-adb02cb9c5/pasted_image_at_2017_01_13_03_01_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3S52JKN2-adb02cb9c5/pasted_image_at_2017_01_13_03_01_pm_160.png",
            "original_w": 408,
            "original_h": 266,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F3S52JKN2/pasted_image_at_2017_01_13_03_01_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "electric_plug",
                    "users": [
                        "U1000HJ8H"
                    ],
                    "count": 1
                },
                {
                    "name": "one",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3P4CFE5D",
            "timestamp": 1483740362,
            "name": "Screen Shot 2017-01-06 at 11.03.11 PM.png",
            "title": "Screen Shot 2017-01-06 at 11.03.11 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3P4CFE5D/screen_shot_2017-01-06_at_11.03.11_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3P4CFE5D/download/screen_shot_2017-01-06_at_11.03.11_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3P4CFE5D-a47da4708d/screen_shot_2017-01-06_at_11.03.11_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3P4CFE5D-a47da4708d/screen_shot_2017-01-06_at_11.03.11_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3P4CFE5D-a47da4708d/screen_shot_2017-01-06_at_11.03.11_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3P4CFE5D-a47da4708d/screen_shot_2017-01-06_at_11.03.11_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3P4CFE5D-a47da4708d/screen_shot_2017-01-06_at_11.03.11_pm_1024.png",
            "original_w": 2172,
            "original_h": 1618,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F3P4CFE5D/screen_shot_2017-01-06_at_11.03.11_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "pill",
                    "users": [
                        "U0N226FV4"
                    ],
                    "count": 1
                },
                {
                    "name": "flag-nl",
                    "users": [
                        "U0N226FV4"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3MNWP1K3",
            "timestamp": 1483740296,
            "name": "Pasted image at 2017_01_06 03_04 PM.png",
            "title": "Pasted image at 2017-01-06, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3MNWP1K3/pasted_image_at_2017_01_06_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3MNWP1K3/download/pasted_image_at_2017_01_06_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3MNWP1K3-2808ee72b3/pasted_image_at_2017_01_06_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3MNWP1K3-2808ee72b3/pasted_image_at_2017_01_06_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3MNWP1K3-2808ee72b3/pasted_image_at_2017_01_06_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3MNWP1K3-2808ee72b3/pasted_image_at_2017_01_06_03_04_pm_720.png",
            "original_w": 889,
            "original_h": 634,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F3MNWP1K3/pasted_image_at_2017_01_06_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "horse",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3NBFBJLB",
            "timestamp": 1483740261,
            "name": "Pasted image at 2017_01_06 03_04 PM.png",
            "title": "Pasted image at 2017-01-06, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3NBFBJLB/pasted_image_at_2017_01_06_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3NBFBJLB/download/pasted_image_at_2017_01_06_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3NBFBJLB-09ce2487c8/pasted_image_at_2017_01_06_03_04_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3NBFBJLB-09ce2487c8/pasted_image_at_2017_01_06_03_04_pm_160.png",
            "original_w": 295,
            "original_h": 355,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F3NBFBJLB/pasted_image_at_2017_01_06_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "man_in_business_suit_levitating",
                    "users": [
                        "U2PG17XKJ"
                    ],
                    "count": 1
                },
                {
                    "name": "parking",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3MNWFC73",
            "timestamp": 1483740253,
            "name": "Pasted image at 2017_01_06 03_04 PM.png",
            "title": "perry!",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3MNWFC73/pasted_image_at_2017_01_06_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3MNWFC73/download/pasted_image_at_2017_01_06_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3MNWFC73-5b806f9274/pasted_image_at_2017_01_06_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3MNWFC73-5b806f9274/pasted_image_at_2017_01_06_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3MNWFC73-5b806f9274/pasted_image_at_2017_01_06_03_04_pm_160.png",
            "original_w": 604,
            "original_h": 659,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F3MNWFC73/pasted_image_at_2017_01_06_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "sunglasses",
                    "users": [
                        "U0ZV9NY93",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3MN2NZ40",
            "timestamp": 1483740247,
            "name": "Drawing (2).jpeg",
            "title": "Drawing (2).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U27CJCFA9",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3MN2NZ40/drawing__2_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3MN2NZ40/download/drawing__2_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3MN2NZ40-4414e4cd3c/drawing__2__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3MN2NZ40-4414e4cd3c/drawing__2__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3MN2NZ40-4414e4cd3c/drawing__2__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3MN2NZ40-4414e4cd3c/drawing__2__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3MN2NZ40-4414e4cd3c/drawing__2__1024.jpg",
            "original_w": 1695,
            "original_h": 900,
            "permalink": "https://appdirect.slack.com/files/ethan.hawthorne/F3MN2NZ40/drawing__2_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "the_horns",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3NDF3L02",
            "timestamp": 1483740247,
            "name": "Drawing (4).png",
            "title": "Drawing (4).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3NDF3L02/drawing__4_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3NDF3L02/download/drawing__4_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3NDF3L02-afb69de7d1/drawing__4__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3NDF3L02-afb69de7d1/drawing__4__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3NDF3L02-afb69de7d1/drawing__4__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3NDF3L02-afb69de7d1/drawing__4__720.png",
            "original_w": 721,
            "original_h": 736,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F3NDF3L02/drawing__4_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "eyes",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3NBF45JP",
            "timestamp": 1483740234,
            "name": "Screen Shot 2017-01-06 at 3.03.41 PM.png",
            "title": "Screen Shot 2017-01-06 at 3.03.41 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3NBF45JP/screen_shot_2017-01-06_at_3.03.41_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3NBF45JP/download/screen_shot_2017-01-06_at_3.03.41_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3NBF45JP-819ee55291/screen_shot_2017-01-06_at_3.03.41_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3NBF45JP-819ee55291/screen_shot_2017-01-06_at_3.03.41_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3NBF45JP-819ee55291/screen_shot_2017-01-06_at_3.03.41_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3NBF45JP-819ee55291/screen_shot_2017-01-06_at_3.03.41_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3NBF45JP-819ee55291/screen_shot_2017-01-06_at_3.03.41_pm_1024.png",
            "original_w": 1176,
            "original_h": 1090,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F3NBF45JP/screen_shot_2017-01-06_at_3.03.41_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "truenorth",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3MN2G108",
            "timestamp": 1483740205,
            "name": "Drawing(1).jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3MN2G108/drawing_1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3MN2G108/download/drawing_1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3MN2G108-43701cdbbd/drawing_1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3MN2G108-43701cdbbd/drawing_1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3MN2G108-43701cdbbd/drawing_1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3MN2G108-43701cdbbd/drawing_1__720.jpg",
            "original_w": 721,
            "original_h": 872,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F3MN2G108/drawing_1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "thinking_face",
                    "users": [
                        "U2A3TTW4V",
                        "U2CL304CW",
                        "U1324MZRS",
                        "U13FJA80G",
                        "U2PG17XKJ",
                        "U2D7F59RU",
                        "U2DU3TZL7",
                        "U27CJCFA9"
                    ],
                    "count": 8
                },
                {
                    "name": "trollface",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                },
                {
                    "name": "sheep",
                    "users": [
                        "U27CJCFA9",
                        "U27DJ3JT0"
                    ],
                    "count": 2
                },
                {
                    "name": "fist",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3P4076CW",
            "timestamp": 1483740191,
            "name": "Drawing(4).png",
            "title": "Drawing(4).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3P4076CW/drawing_4_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3P4076CW/download/drawing_4_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3P4076CW-44ad87b324/drawing_4__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3P4076CW-44ad87b324/drawing_4__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3P4076CW-44ad87b324/drawing_4__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3P4076CW-44ad87b324/drawing_4__720.png",
            "original_w": 1015,
            "original_h": 661,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F3P4076CW/drawing_4_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "mortar_board",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3NG0AK6Z",
            "timestamp": 1483740183,
            "name": "gary_the_platypus.jpeg",
            "title": "gary_the_platypus.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3NG0AK6Z/gary_the_platypus.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3NG0AK6Z/download/gary_the_platypus.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3NG0AK6Z-558f493a96/gary_the_platypus_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3NG0AK6Z-558f493a96/gary_the_platypus_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3NG0AK6Z-558f493a96/gary_the_platypus_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3NG0AK6Z-558f493a96/gary_the_platypus_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3NG0AK6Z-558f493a96/gary_the_platypus_1024.jpg",
            "original_w": 1141,
            "original_h": 539,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F3NG0AK6Z/gary_the_platypus.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "tophat",
                    "users": [
                        "U054FNLPS",
                        "U2DU3TZL7",
                        "U0ZV9NY93",
                        "U08P10WPQ"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F3NDEJMK4",
            "timestamp": 1483740180,
            "name": "Pasted image at 2017_01_06 03_02 PM.png",
            "title": "Pasted image at 2017-01-06, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3NDEJMK4/pasted_image_at_2017_01_06_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3NDEJMK4/download/pasted_image_at_2017_01_06_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3NDEJMK4-136cba8945/pasted_image_at_2017_01_06_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3NDEJMK4-136cba8945/pasted_image_at_2017_01_06_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3NDEJMK4-136cba8945/pasted_image_at_2017_01_06_03_02_pm_160.png",
            "original_w": 620,
            "original_h": 524,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F3NDEJMK4/pasted_image_at_2017_01_06_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "mustache",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3MN28L3A",
            "timestamp": 1483740180,
            "name": "Screen Shot 2017-01-06 at 3.02.22 PM.png",
            "title": "Screen Shot 2017-01-06 at 3.02.22 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3MN28L3A/screen_shot_2017-01-06_at_3.02.22_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3MN28L3A/download/screen_shot_2017-01-06_at_3.02.22_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3MN28L3A-6ccd30430d/screen_shot_2017-01-06_at_3.02.22_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3MN28L3A-6ccd30430d/screen_shot_2017-01-06_at_3.02.22_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3MN28L3A-6ccd30430d/screen_shot_2017-01-06_at_3.02.22_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3MN28L3A-6ccd30430d/screen_shot_2017-01-06_at_3.02.22_pm_720.png",
            "original_w": 990,
            "original_h": 690,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F3MN28L3A/screen_shot_2017-01-06_at_3.02.22_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc3P4B7N0P",
                "timestamp": 1483740180,
                "user": "U2PKVNC87",
                "is_intro": true,
                "comment": "where are my canadian pals?"
            },
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2DU3TZL7"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3NG09S69",
            "timestamp": 1483740178,
            "name": "Untitled__.jpg",
            "title": "Untitled__.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2PKR3B2S",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3NG09S69/untitled__.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3NG09S69/download/untitled__.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3NG09S69-94caeaf190/untitled___360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3NG09S69-94caeaf190/untitled___480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3NG09S69-94caeaf190/untitled___160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3NG09S69-94caeaf190/untitled___720.jpg",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/darnell.shinbine/F3NG09S69/untitled__.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "surfer",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3NDEHGBC",
            "timestamp": 1483740172,
            "name": "Screen Shot 2017-01-06 at 3.03.03 PM.png",
            "title": "Screen Shot 2017-01-06 at 3.03.03 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0B6XFXQE",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3NDEHGBC/screen_shot_2017-01-06_at_3.03.03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3NDEHGBC/download/screen_shot_2017-01-06_at_3.03.03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3NDEHGBC-d06de40081/screen_shot_2017-01-06_at_3.03.03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3NDEHGBC-d06de40081/screen_shot_2017-01-06_at_3.03.03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3NDEHGBC-d06de40081/screen_shot_2017-01-06_at_3.03.03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3NDEHGBC-d06de40081/screen_shot_2017-01-06_at_3.03.03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3NDEHGBC-d06de40081/screen_shot_2017-01-06_at_3.03.03_pm_1024.png",
            "original_w": 1059,
            "original_h": 802,
            "permalink": "https://appdirect.slack.com/files/neil.grover/F3NDEHGBC/screen_shot_2017-01-06_at_3.03.03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "baby",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3MNVSP97",
            "timestamp": 1483740172,
            "name": "Screen Shot 2017-01-06 at 2.02.19 PM.png",
            "title": "Hello! Have you seen my EGGS?",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3MNVSP97/screen_shot_2017-01-06_at_2.02.19_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3MNVSP97/download/screen_shot_2017-01-06_at_2.02.19_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3MNVSP97-2a45639b2b/screen_shot_2017-01-06_at_2.02.19_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3MNVSP97-2a45639b2b/screen_shot_2017-01-06_at_2.02.19_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3MNVSP97-2a45639b2b/screen_shot_2017-01-06_at_2.02.19_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3MNVSP97-2a45639b2b/screen_shot_2017-01-06_at_2.02.19_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3MNVSP97-2a45639b2b/screen_shot_2017-01-06_at_2.02.19_pm_1024.png",
            "original_w": 1792,
            "original_h": 1266,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F3MNVSP97/screen_shot_2017-01-06_at_2.02.19_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "open_mouth",
                    "users": [
                        "U1324MZRS",
                        "U2G4XKRRU",
                        "U2DU3TZL7",
                        "U08P10WPQ",
                        "U2PG17XKJ"
                    ],
                    "count": 5
                },
                {
                    "name": "+1",
                    "users": [
                        "U1324MZRS",
                        "U2CL304CW"
                    ],
                    "count": 2
                },
                {
                    "name": "sports_medal",
                    "users": [
                        "U2G4XKRRU",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "trophy",
                    "users": [
                        "U13FJA80G",
                        "U2KRMJ9MM",
                        "U2CL304CW"
                    ],
                    "count": 3
                },
                {
                    "name": "crown",
                    "users": [
                        "U2PKVNC87"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3P4B4NNT",
            "timestamp": 1483740166,
            "name": "Screen Shot 2017-01-06 at 3.02.32 PM.png",
            "title": "Screen Shot 2017-01-06 at 3.02.32 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3P4B4NNT/screen_shot_2017-01-06_at_3.02.32_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3P4B4NNT/download/screen_shot_2017-01-06_at_3.02.32_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3P4B4NNT-3c8c510a78/screen_shot_2017-01-06_at_3.02.32_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3P4B4NNT-3c8c510a78/screen_shot_2017-01-06_at_3.02.32_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3P4B4NNT-3c8c510a78/screen_shot_2017-01-06_at_3.02.32_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3P4B4NNT-3c8c510a78/screen_shot_2017-01-06_at_3.02.32_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3P4B4NNT-3c8c510a78/screen_shot_2017-01-06_at_3.02.32_pm_1024.png",
            "original_w": 1848,
            "original_h": 1110,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F3P4B4NNT/screen_shot_2017-01-06_at_3.02.32_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "bat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "bow_and_arrow",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3MN25BPS",
            "timestamp": 1483740158,
            "name": "Pasted image at 2017_01_06 03_02 PM.png",
            "title": "Platy",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3MN25BPS/pasted_image_at_2017_01_06_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3MN25BPS/download/pasted_image_at_2017_01_06_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3MN25BPS-9a7428e3ad/pasted_image_at_2017_01_06_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3MN25BPS-9a7428e3ad/pasted_image_at_2017_01_06_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3MN25BPS-9a7428e3ad/pasted_image_at_2017_01_06_03_02_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3MN25BPS-9a7428e3ad/pasted_image_at_2017_01_06_03_02_pm_720.png",
            "original_w": 862,
            "original_h": 362,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F3MN25BPS/pasted_image_at_2017_01_06_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3P4B1BUP",
            "timestamp": 1483740145,
            "name": "Screen Shot 2017-01-06 at 3.02.06 PM.png",
            "title": "Screen Shot 2017-01-06 at 3.02.06 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3P4B1BUP/screen_shot_2017-01-06_at_3.02.06_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3P4B1BUP/download/screen_shot_2017-01-06_at_3.02.06_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3P4B1BUP-e2983f87e1/screen_shot_2017-01-06_at_3.02.06_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3P4B1BUP-e2983f87e1/screen_shot_2017-01-06_at_3.02.06_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3P4B1BUP-e2983f87e1/screen_shot_2017-01-06_at_3.02.06_pm_160.png",
            "original_w": 693,
            "original_h": 513,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F3P4B1BUP/screen_shot_2017-01-06_at_3.02.06_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "sunny",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3NBE350T",
            "timestamp": 1483740083,
            "name": "Pasted image at 2017_01_06 03_01 PM.png",
            "title": "terrible... just terrible",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3NBE350T/pasted_image_at_2017_01_06_03_01_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3NBE350T/download/pasted_image_at_2017_01_06_03_01_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3NBE350T-f4dad0d706/pasted_image_at_2017_01_06_03_01_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3NBE350T-f4dad0d706/pasted_image_at_2017_01_06_03_01_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3NBE350T-f4dad0d706/pasted_image_at_2017_01_06_03_01_pm_160.png",
            "original_w": 425,
            "original_h": 513,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F3NBE350T/pasted_image_at_2017_01_06_03_01_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                },
                {
                    "name": "penguin",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3LPHNL4E",
            "timestamp": 1483136093,
            "name": "Pasted image at 2016_12_30 03_14 PM.png",
            "title": "I tried",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3LPHNL4E/pasted_image_at_2016_12_30_03_14_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3LPHNL4E/download/pasted_image_at_2016_12_30_03_14_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3LPHNL4E-92261fc896/pasted_image_at_2016_12_30_03_14_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3LPHNL4E-92261fc896/pasted_image_at_2016_12_30_03_14_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3LPHNL4E-92261fc896/pasted_image_at_2016_12_30_03_14_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3LPHNL4E-92261fc896/pasted_image_at_2016_12_30_03_14_pm_720.png",
            "original_w": 844,
            "original_h": 802,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F3LPHNL4E/pasted_image_at_2016_12_30_03_14_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U2PG17XKJ",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3LPFE5CN",
            "timestamp": 1483135337,
            "name": "download (4).jpeg",
            "title": "samsquanch",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3LPFE5CN/download__4_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3LPFE5CN/download/download__4_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3LPFE5CN-7f803d2cc0/download__4__360.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3LPFE5CN-7f803d2cc0/download__4__160.jpg",
            "original_w": 225,
            "original_h": 225,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F3LPFE5CN/download__4_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F3JCLT16X",
            "timestamp": 1482524977,
            "name": "Pasted image at 2016_12_23 01_29 PM.png",
            "title": "Pasted image at 2016-12-23, 1:29 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3JCLT16X/pasted_image_at_2016_12_23_01_29_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3JCLT16X/download/pasted_image_at_2016_12_23_01_29_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3JCLT16X-66e3c1ad94/pasted_image_at_2016_12_23_01_29_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3JCLT16X-66e3c1ad94/pasted_image_at_2016_12_23_01_29_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3JCLT16X-66e3c1ad94/pasted_image_at_2016_12_23_01_29_pm_160.png",
            "original_w": 411,
            "original_h": 540,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F3JCLT16X/pasted_image_at_2016_12_23_01_29_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U27DJ3JT0"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3G3HTNF6",
            "timestamp": 1481928649,
            "name": "Pasted image at 2016_12_16 03_50 PM.png",
            "title": "Pasted image at 2016-12-16, 3:50 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3G3HTNF6/pasted_image_at_2016_12_16_03_50_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3G3HTNF6/download/pasted_image_at_2016_12_16_03_50_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3G3HTNF6-8c22a4b27f/pasted_image_at_2016_12_16_03_50_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3G3HTNF6-8c22a4b27f/pasted_image_at_2016_12_16_03_50_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3G3HTNF6-8c22a4b27f/pasted_image_at_2016_12_16_03_50_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3G3HTNF6-8c22a4b27f/pasted_image_at_2016_12_16_03_50_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3G3HTNF6-8c22a4b27f/pasted_image_at_2016_12_16_03_50_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F3G3HTNF6/pasted_image_at_2016_12_16_03_50_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                },
                {
                    "name": "sunglasses",
                    "users": [
                        "U2PG17XKJ"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U2G4XKRRU",
                        "U08P10WPQ",
                        "U2D7F59RU"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F3DNKKRLP",
            "timestamp": 1481321818,
            "name": "Pasted image at 2016_12_09 03_16 PM.png",
            "title": "never too late",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3DNKKRLP/pasted_image_at_2016_12_09_03_16_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3DNKKRLP/download/pasted_image_at_2016_12_09_03_16_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3DNKKRLP-b75bab7dff/pasted_image_at_2016_12_09_03_16_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3DNKKRLP-b75bab7dff/pasted_image_at_2016_12_09_03_16_pm_160.png",
            "original_w": 433,
            "original_h": 351,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F3DNKKRLP/pasted_image_at_2016_12_09_03_16_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "scream",
                    "users": [
                        "U0ZV9NY93",
                        "U2G4XKRRU"
                    ],
                    "count": 2
                },
                {
                    "name": "mantelpiece_clock",
                    "users": [
                        "U2CL304CW",
                        "U2HN6FYRM",
                        "U27CJCFA9"
                    ],
                    "count": 3
                },
                {
                    "name": "+1",
                    "users": [
                        "U2B523PT9"
                    ],
                    "count": 1
                },
                {
                    "name": "heart",
                    "users": [
                        "U2G4XKRRU"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3DN2SDEJ",
            "timestamp": 1481321110,
            "name": "Drawing (1).jpeg",
            "title": "Drawing (1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U27CJCFA9",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3DN2SDEJ/drawing__1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3DN2SDEJ/download/drawing__1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3DN2SDEJ-bc2031b1c7/drawing__1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3DN2SDEJ-bc2031b1c7/drawing__1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3DN2SDEJ-bc2031b1c7/drawing__1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3DN2SDEJ-bc2031b1c7/drawing__1__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3DN2SDEJ-bc2031b1c7/drawing__1__1024.jpg",
            "original_w": 1695,
            "original_h": 910,
            "permalink": "https://appdirect.slack.com/files/ethan.hawthorne/F3DN2SDEJ/drawing__1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U2A3TTW4V",
                        "U2CL304CW"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U1000HJ8H",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3CBQQ9A5",
            "timestamp": 1481321105,
            "name": "Screen Shot 2016-12-09 at 11.02.56 PM.png",
            "title": "Screen Shot 2016-12-09 at 11.02.56 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3CBQQ9A5/screen_shot_2016-12-09_at_11.02.56_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3CBQQ9A5/download/screen_shot_2016-12-09_at_11.02.56_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3CBQQ9A5-4a35592f2b/screen_shot_2016-12-09_at_11.02.56_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3CBQQ9A5-4a35592f2b/screen_shot_2016-12-09_at_11.02.56_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3CBQQ9A5-4a35592f2b/screen_shot_2016-12-09_at_11.02.56_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3CBQQ9A5-4a35592f2b/screen_shot_2016-12-09_at_11.02.56_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3CBQQ9A5-4a35592f2b/screen_shot_2016-12-09_at_11.02.56_pm_1024.png",
            "original_w": 1980,
            "original_h": 1500,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F3CBQQ9A5/screen_shot_2016-12-09_at_11.02.56_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G",
                        "U2HN6FYRM",
                        "U2CL304CW"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F3D0852V9",
            "timestamp": 1481321082,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27D07RKN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3D0852V9/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3D0852V9/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3D0852V9-2bc3bff8d2/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3D0852V9-2bc3bff8d2/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3D0852V9-2bc3bff8d2/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3D0852V9-2bc3bff8d2/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3D0852V9-2bc3bff8d2/drawing_1024.png",
            "original_w": 1695,
            "original_h": 950,
            "permalink": "https://appdirect.slack.com/files/jernej.klancic/F3D0852V9/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "question",
                    "users": [
                        "U2PG17XKJ",
                        "U13FJA80G",
                        "U1000HJ8H",
                        "U2CL304CW",
                        "U0ZV9NY93"
                    ],
                    "count": 5
                },
                {
                    "name": "lennyface",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3DNELUJK",
            "timestamp": 1481321052,
            "name": "Pasted image at 2016_12_09 03_04 PM.png",
            "title": "Shararek",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3DNELUJK/pasted_image_at_2016_12_09_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3DNELUJK/download/pasted_image_at_2016_12_09_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3DNELUJK-8251f0177b/pasted_image_at_2016_12_09_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3DNELUJK-8251f0177b/pasted_image_at_2016_12_09_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3DNELUJK-8251f0177b/pasted_image_at_2016_12_09_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3DNELUJK-8251f0177b/pasted_image_at_2016_12_09_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3DNELUJK-8251f0177b/pasted_image_at_2016_12_09_03_04_pm_1024.png",
            "original_w": 1055,
            "original_h": 643,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F3DNELUJK/pasted_image_at_2016_12_09_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G",
                        "U2CL304CW"
                    ],
                    "count": 2
                },
                {
                    "name": "muscle",
                    "users": [
                        "U2HN6FYRM",
                        "U2CL304CW"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3D2709V0",
            "timestamp": 1481321051,
            "name": "Drawing (4).png",
            "title": "Drawing (4).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3D2709V0/drawing__4_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3D2709V0/download/drawing__4_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3D2709V0-bc608bc470/drawing__4__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3D2709V0-bc608bc470/drawing__4__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3D2709V0-bc608bc470/drawing__4__160.png",
            "original_w": 529,
            "original_h": 301,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F3D2709V0/drawing__4_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G",
                        "U2CL304CW"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3CAUGQHE",
            "timestamp": 1481321027,
            "name": "Pasted image at 2016_12_09 03_03 PM.png",
            "title": "Pasted image at 2016-12-09, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3CAUGQHE/pasted_image_at_2016_12_09_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3CAUGQHE/download/pasted_image_at_2016_12_09_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3CAUGQHE-72b561d01d/pasted_image_at_2016_12_09_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3CAUGQHE-72b561d01d/pasted_image_at_2016_12_09_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3CAUGQHE-72b561d01d/pasted_image_at_2016_12_09_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3CAUGQHE-72b561d01d/pasted_image_at_2016_12_09_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3CAUGQHE-72b561d01d/pasted_image_at_2016_12_09_03_03_pm_1024.png",
            "original_w": 750,
            "original_h": 1313,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F3CAUGQHE/pasted_image_at_2016_12_09_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pray",
                    "users": [
                        "U2PG17XKJ"
                    ],
                    "count": 1
                },
                {
                    "name": "moneybag",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "trophy",
                    "users": [
                        "U1000HJ8H",
                        "U2CL304CW",
                        "U2HN6FYRM"
                    ],
                    "count": 3
                },
                {
                    "name": "sports_medal",
                    "users": [
                        "U2CL304CW",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3DN23486",
            "timestamp": 1481320996,
            "name": "Screen Shot 2016-12-09 at 3.03.04 PM.png",
            "title": "Screen Shot 2016-12-09 at 3.03.04 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3DN23486/screen_shot_2016-12-09_at_3.03.04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3DN23486/download/screen_shot_2016-12-09_at_3.03.04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3DN23486-c0acd3783e/screen_shot_2016-12-09_at_3.03.04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3DN23486-c0acd3783e/screen_shot_2016-12-09_at_3.03.04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3DN23486-c0acd3783e/screen_shot_2016-12-09_at_3.03.04_pm_160.png",
            "original_w": 600,
            "original_h": 552,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F3DN23486/screen_shot_2016-12-09_at_3.03.04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "tada",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3D26J3JN",
            "timestamp": 1481320994,
            "name": "hammer_hand_shark.png",
            "title": "hammer_hand_shark.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3D26J3JN/hammer_hand_shark.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3D26J3JN/download/hammer_hand_shark.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3D26J3JN-cc2f194e9a/hammer_hand_shark_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3D26J3JN-cc2f194e9a/hammer_hand_shark_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3D26J3JN-cc2f194e9a/hammer_hand_shark_160.png",
            "original_w": 607,
            "original_h": 623,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F3D26J3JN/hammer_hand_shark.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pma",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3DNE7SLF",
            "timestamp": 1481320985,
            "name": "Hammer_Head_Shark.png",
            "title": "Hammer_Head_Shark.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2D7F59RU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3DNE7SLF/hammer_head_shark.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3DNE7SLF/download/hammer_head_shark.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3DNE7SLF-68dfe0fed0/hammer_head_shark_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3DNE7SLF-68dfe0fed0/hammer_head_shark_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3DNE7SLF-68dfe0fed0/hammer_head_shark_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3DNE7SLF-68dfe0fed0/hammer_head_shark_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3DNE7SLF-68dfe0fed0/hammer_head_shark_1024.png",
            "original_w": 1311,
            "original_h": 695,
            "permalink": "https://appdirect.slack.com/files/george.dimitrov/F3DNE7SLF/hammer_head_shark.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "grimacing",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "tropical_fish",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3D4FAHEY",
            "timestamp": 1481320985,
            "name": "Screen Shot 2016-12-09 at 3.02.51 PM.png",
            "title": "Screen Shot 2016-12-09 at 3.02.51 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3D4FAHEY/screen_shot_2016-12-09_at_3.02.51_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3D4FAHEY/download/screen_shot_2016-12-09_at_3.02.51_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3D4FAHEY-57e74767c4/screen_shot_2016-12-09_at_3.02.51_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3D4FAHEY-57e74767c4/screen_shot_2016-12-09_at_3.02.51_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3D4FAHEY-57e74767c4/screen_shot_2016-12-09_at_3.02.51_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3D4FAHEY-57e74767c4/screen_shot_2016-12-09_at_3.02.51_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3D4FAHEY-57e74767c4/screen_shot_2016-12-09_at_3.02.51_pm_1024.png",
            "original_w": 966,
            "original_h": 1060,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F3D4FAHEY/screen_shot_2016-12-09_at_3.02.51_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "white_check_mark",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3D4FA0GL",
            "timestamp": 1481320982,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G1VV7AR",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3D4FA0GL/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3D4FA0GL/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3D4FA0GL-3e256d2dad/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3D4FA0GL-3e256d2dad/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3D4FA0GL-3e256d2dad/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3D4FA0GL-3e256d2dad/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3D4FA0GL-3e256d2dad/drawing_1024.jpg",
            "original_w": 1141,
            "original_h": 593,
            "permalink": "https://appdirect.slack.com/files/michael.benediktson/F3D4FA0GL/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U2HN6FYRM",
                        "U2A3TTW4V",
                        "U13FJA80G",
                        "U2DU3TZL7",
                        "U0B52QL07",
                        "U2PG17XKJ"
                    ],
                    "count": 6
                },
                {
                    "name": "notbad",
                    "users": [
                        "U2PG17XKJ",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3D4RGTRB",
            "timestamp": 1481320957,
            "name": "Screen Shot 2016-12-09 at 3.02.15 PM.png",
            "title": "Screen Shot 2016-12-09 at 3.02.15 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3D4RGTRB/screen_shot_2016-12-09_at_3.02.15_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3D4RGTRB/download/screen_shot_2016-12-09_at_3.02.15_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3D4RGTRB-eb5c6f6654/screen_shot_2016-12-09_at_3.02.15_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3D4RGTRB-eb5c6f6654/screen_shot_2016-12-09_at_3.02.15_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3D4RGTRB-eb5c6f6654/screen_shot_2016-12-09_at_3.02.15_pm_160.png",
            "original_w": 629,
            "original_h": 398,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F3D4RGTRB/screen_shot_2016-12-09_at_3.02.15_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3CATF6DN",
            "timestamp": 1481320884,
            "name": "Drawing (1).jpeg",
            "title": "Drawing (1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3CATF6DN/drawing__1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3CATF6DN/download/drawing__1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3CATF6DN-fe75ca2ed6/drawing__1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3CATF6DN-fe75ca2ed6/drawing__1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3CATF6DN-fe75ca2ed6/drawing__1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3CATF6DN-fe75ca2ed6/drawing__1__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3CATF6DN-fe75ca2ed6/drawing__1__1024.jpg",
            "original_w": 1141,
            "original_h": 598,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F3CATF6DN/drawing__1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3A3ZF942",
            "timestamp": 1480716347,
            "name": "Pasted image at 2016_12_02 03_05 PM.png",
            "title": "king_cobra",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3A3ZF942/pasted_image_at_2016_12_02_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3A3ZF942/download/pasted_image_at_2016_12_02_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3A3ZF942-81778bc535/pasted_image_at_2016_12_02_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3A3ZF942-81778bc535/pasted_image_at_2016_12_02_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3A3ZF942-81778bc535/pasted_image_at_2016_12_02_03_05_pm_160.png",
            "original_w": 556,
            "original_h": 590,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F3A3ZF942/pasted_image_at_2016_12_02_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F3A3Z6UKC",
            "timestamp": 1480716313,
            "name": "king_cobra.png",
            "title": "king_cobra.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3A3Z6UKC/king_cobra.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3A3Z6UKC/download/king_cobra.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3A3Z6UKC-afb637114a/king_cobra_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3A3Z6UKC-afb637114a/king_cobra_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3A3Z6UKC-afb637114a/king_cobra_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3A3Z6UKC-afb637114a/king_cobra_720.png",
            "original_w": 606,
            "original_h": 738,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F3A3Z6UKC/king_cobra.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F39DH3GSV",
            "timestamp": 1480716271,
            "name": "Pasted image at 2016_12_02 03_04 PM.png",
            "title": "Pasted image at 2016-12-02, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F39DH3GSV/pasted_image_at_2016_12_02_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F39DH3GSV/download/pasted_image_at_2016_12_02_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F39DH3GSV-0c80bf9399/pasted_image_at_2016_12_02_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F39DH3GSV-0c80bf9399/pasted_image_at_2016_12_02_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F39DH3GSV-0c80bf9399/pasted_image_at_2016_12_02_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F39DH3GSV-0c80bf9399/pasted_image_at_2016_12_02_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F39DH3GSV-0c80bf9399/pasted_image_at_2016_12_02_03_04_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F39DH3GSV/pasted_image_at_2016_12_02_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                },
                {
                    "name": "snake",
                    "users": [
                        "U2PG17XKJ",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3A1ZAFU3",
            "timestamp": 1480716252,
            "name": "Pasted image at 2016_12_02 03_04 PM.png",
            "title": "Pasted image at 2016-12-02, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL304CW",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3A1ZAFU3/pasted_image_at_2016_12_02_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3A1ZAFU3/download/pasted_image_at_2016_12_02_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3A1ZAFU3-721085f8ba/pasted_image_at_2016_12_02_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3A1ZAFU3-721085f8ba/pasted_image_at_2016_12_02_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3A1ZAFU3-721085f8ba/pasted_image_at_2016_12_02_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3A1ZAFU3-721085f8ba/pasted_image_at_2016_12_02_03_04_pm_720.png",
            "original_w": 943,
            "original_h": 786,
            "permalink": "https://appdirect.slack.com/files/luigi.vamenta/F3A1ZAFU3/pasted_image_at_2016_12_02_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U13FJA80G",
                        "U2PG17XKJ",
                        "U1000HJ8H",
                        "U2DU3TZL7"
                    ],
                    "count": 4
                },
                {
                    "name": "clap",
                    "users": [
                        "U2G4XKRRU"
                    ],
                    "count": 1
                },
                {
                    "name": "sports_medal",
                    "users": [
                        "U2G4XKRRU",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "tada",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F3A3YNU2W",
            "timestamp": 1480716244,
            "name": "Drawing (3).png",
            "title": "Drawing (3).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3A3YNU2W/drawing__3_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3A3YNU2W/download/drawing__3_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3A3YNU2W-ddea509e3b/drawing__3__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3A3YNU2W-ddea509e3b/drawing__3__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3A3YNU2W-ddea509e3b/drawing__3__160.png",
            "original_w": 510,
            "original_h": 478,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F3A3YNU2W/drawing__3_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "trophy",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "heartpulse",
                    "users": [
                        "U2PG17XKJ",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F39DGNLMP",
            "timestamp": 1480716224,
            "name": "Pasted image at 2016_12_02 03_03 PM.png",
            "title": "Pasted image at 2016-12-02, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F39DGNLMP/pasted_image_at_2016_12_02_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F39DGNLMP/download/pasted_image_at_2016_12_02_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F39DGNLMP-0de6f307b3/pasted_image_at_2016_12_02_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F39DGNLMP-0de6f307b3/pasted_image_at_2016_12_02_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F39DGNLMP-0de6f307b3/pasted_image_at_2016_12_02_03_03_pm_160.png",
            "original_w": 361,
            "original_h": 492,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F39DGNLMP/pasted_image_at_2016_12_02_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "crown",
                    "users": [
                        "U13GTGD7G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F39DGN5TK",
            "timestamp": 1480716221,
            "name": "Screen Shot 2016-12-02 at 3.03.27 PM.png",
            "title": "Screen Shot 2016-12-02 at 3.03.27 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F39DGN5TK/screen_shot_2016-12-02_at_3.03.27_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F39DGN5TK/download/screen_shot_2016-12-02_at_3.03.27_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F39DGN5TK-c8ad2bc971/screen_shot_2016-12-02_at_3.03.27_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F39DGN5TK-c8ad2bc971/screen_shot_2016-12-02_at_3.03.27_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F39DGN5TK-c8ad2bc971/screen_shot_2016-12-02_at_3.03.27_pm_160.png",
            "original_w": 589,
            "original_h": 404,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F39DGN5TK/screen_shot_2016-12-02_at_3.03.27_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "skull",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3AQ5NF1V",
            "timestamp": 1480716216,
            "name": "Screen Shot 2016-12-02 at 3.03.23 PM.png",
            "title": "Screen Shot 2016-12-02 at 3.03.23 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3AQ5NF1V/screen_shot_2016-12-02_at_3.03.23_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3AQ5NF1V/download/screen_shot_2016-12-02_at_3.03.23_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3AQ5NF1V-3e2e5a65f0/screen_shot_2016-12-02_at_3.03.23_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3AQ5NF1V-3e2e5a65f0/screen_shot_2016-12-02_at_3.03.23_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3AQ5NF1V-3e2e5a65f0/screen_shot_2016-12-02_at_3.03.23_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3AQ5NF1V-3e2e5a65f0/screen_shot_2016-12-02_at_3.03.23_pm_720.png",
            "original_w": 910,
            "original_h": 942,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F3AQ5NF1V/screen_shot_2016-12-02_at_3.03.23_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "eyes",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F39CKR9CY",
            "timestamp": 1480716206,
            "name": "Drawing(1).jpeg",
            "title": "Drawing(1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F39CKR9CY/drawing_1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F39CKR9CY/download/drawing_1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F39CKR9CY-48466dc793/drawing_1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F39CKR9CY-48466dc793/drawing_1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F39CKR9CY-48466dc793/drawing_1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F39CKR9CY-48466dc793/drawing_1__720.jpg",
            "original_w": 1007,
            "original_h": 679,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F39CKR9CY/drawing_1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc3A6HK7GV",
                "timestamp": 1480716206,
                "user": "U08P10WPQ",
                "is_intro": true,
                "comment": "THE king cobra"
            },
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2G4XKRRU",
                        "U2DU3TZL7",
                        "U0ZV9NY93"
                    ],
                    "count": 3
                },
                {
                    "name": "horse",
                    "users": [
                        "U13FJA80G",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F39CKRD96",
            "timestamp": 1480716206,
            "name": "Screen Shot 2016-12-02 at 3.03.09 PM.png",
            "title": "Screen Shot 2016-12-02 at 3.03.09 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F39CKRD96/screen_shot_2016-12-02_at_3.03.09_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F39CKRD96/download/screen_shot_2016-12-02_at_3.03.09_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F39CKRD96-64e5026f49/screen_shot_2016-12-02_at_3.03.09_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F39CKRD96-64e5026f49/screen_shot_2016-12-02_at_3.03.09_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F39CKRD96-64e5026f49/screen_shot_2016-12-02_at_3.03.09_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F39CKRD96-64e5026f49/screen_shot_2016-12-02_at_3.03.09_pm_720.png",
            "original_w": 832,
            "original_h": 494,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F39CKRD96/screen_shot_2016-12-02_at_3.03.09_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3A66N7HA",
            "timestamp": 1480716194,
            "name": "Pasted image at 2016_12_02 03_03 PM.png",
            "title": "Pasted image at 2016-12-02, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3A66N7HA/pasted_image_at_2016_12_02_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3A66N7HA/download/pasted_image_at_2016_12_02_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3A66N7HA-3ff44de032/pasted_image_at_2016_12_02_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3A66N7HA-3ff44de032/pasted_image_at_2016_12_02_03_03_pm_160.png",
            "original_w": 451,
            "original_h": 411,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F3A66N7HA/pasted_image_at_2016_12_02_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F39DGEFHP",
            "timestamp": 1480716190,
            "name": "Pasted image at 2016_12_02 03_03 PM.png",
            "title": "Pasted image at 2016-12-02, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F39DGEFHP/pasted_image_at_2016_12_02_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F39DGEFHP/download/pasted_image_at_2016_12_02_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F39DGEFHP-feddabf655/pasted_image_at_2016_12_02_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F39DGEFHP-feddabf655/pasted_image_at_2016_12_02_03_03_pm_160.png",
            "original_w": 349,
            "original_h": 399,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F39DGEFHP/pasted_image_at_2016_12_02_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "beers",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "crown",
                    "users": [
                        "U08P10WPQ",
                        "U2HN6FYRM",
                        "U2PKVNC87"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F3AQ5EN3Z",
            "timestamp": 1480716186,
            "name": "Screen Shot 2016-12-02 at 11.01.50 PM.png",
            "title": "Screen Shot 2016-12-02 at 11.01.50 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3AQ5EN3Z/screen_shot_2016-12-02_at_11.01.50_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3AQ5EN3Z/download/screen_shot_2016-12-02_at_11.01.50_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3AQ5EN3Z-b7e70d02bb/screen_shot_2016-12-02_at_11.01.50_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3AQ5EN3Z-b7e70d02bb/screen_shot_2016-12-02_at_11.01.50_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3AQ5EN3Z-b7e70d02bb/screen_shot_2016-12-02_at_11.01.50_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3AQ5EN3Z-b7e70d02bb/screen_shot_2016-12-02_at_11.01.50_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3AQ5EN3Z-b7e70d02bb/screen_shot_2016-12-02_at_11.01.50_pm_1024.png",
            "original_w": 2686,
            "original_h": 1544,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F3AQ5EN3Z/screen_shot_2016-12-02_at_11.01.50_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "smirk",
                    "users": [
                        "U2PG17XKJ"
                    ],
                    "count": 1
                },
                {
                    "name": "joy",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G",
                        "U2HN6FYRM"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F3APU027Q",
            "timestamp": 1480716182,
            "name": "Screen Shot 2016-12-02 at 3.02.48 PM.png",
            "title": "Screen Shot 2016-12-02 at 3.02.48 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3APU027Q/screen_shot_2016-12-02_at_3.02.48_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3APU027Q/download/screen_shot_2016-12-02_at_3.02.48_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3APU027Q-de65d649fe/screen_shot_2016-12-02_at_3.02.48_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3APU027Q-de65d649fe/screen_shot_2016-12-02_at_3.02.48_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3APU027Q-de65d649fe/screen_shot_2016-12-02_at_3.02.48_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3APU027Q-de65d649fe/screen_shot_2016-12-02_at_3.02.48_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3APU027Q-de65d649fe/screen_shot_2016-12-02_at_3.02.48_pm_1024.png",
            "original_w": 1454,
            "original_h": 1382,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F3APU027Q/screen_shot_2016-12-02_at_3.02.48_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3A6HAPCM",
            "timestamp": 1480716176,
            "name": "Screen Shot 2016-12-02 at 2.02.31 PM.png",
            "title": "Screen Shot 2016-12-02 at 2.02.31 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3A6HAPCM/screen_shot_2016-12-02_at_2.02.31_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3A6HAPCM/download/screen_shot_2016-12-02_at_2.02.31_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3A6HAPCM-f841de30c9/screen_shot_2016-12-02_at_2.02.31_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3A6HAPCM-f841de30c9/screen_shot_2016-12-02_at_2.02.31_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3A6HAPCM-f841de30c9/screen_shot_2016-12-02_at_2.02.31_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3A6HAPCM-f841de30c9/screen_shot_2016-12-02_at_2.02.31_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3A6HAPCM-f841de30c9/screen_shot_2016-12-02_at_2.02.31_pm_1024.png",
            "original_w": 1028,
            "original_h": 1600,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F3A6HAPCM/screen_shot_2016-12-02_at_2.02.31_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fire",
                    "users": [
                        "U13FJA80G",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U2A658R7U"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F39CKA7T2",
            "timestamp": 1480716138,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F39CKA7T2/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F39CKA7T2/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F39CKA7T2-e1c7d15af3/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F39CKA7T2-e1c7d15af3/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F39CKA7T2-e1c7d15af3/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F39CKA7T2-e1c7d15af3/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F39CKA7T2-e1c7d15af3/drawing_1024.jpg",
            "original_w": 1141,
            "original_h": 598,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F39CKA7T2/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "wave",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "pokemonball",
                    "users": [
                        "U0ZV27VBQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3APTGLFQ",
            "timestamp": 1480716119,
            "name": "Screen Shot 2016-12-02 at 3.01.43 PM.png",
            "title": "Screen Shot 2016-12-02 at 3.01.43 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3APTGLFQ/screen_shot_2016-12-02_at_3.01.43_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3APTGLFQ/download/screen_shot_2016-12-02_at_3.01.43_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3APTGLFQ-46a2a7413e/screen_shot_2016-12-02_at_3.01.43_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3APTGLFQ-46a2a7413e/screen_shot_2016-12-02_at_3.01.43_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3APTGLFQ-46a2a7413e/screen_shot_2016-12-02_at_3.01.43_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3APTGLFQ-46a2a7413e/screen_shot_2016-12-02_at_3.01.43_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3APTGLFQ-46a2a7413e/screen_shot_2016-12-02_at_3.01.43_pm_1024.png",
            "original_w": 1362,
            "original_h": 916,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F3APTGLFQ/screen_shot_2016-12-02_at_3.01.43_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "question",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F379B76AG",
            "timestamp": 1480111647,
            "name": "Pasted image at 2016_11_25 03_07 PM.png",
            "title": "late submission",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A658R7U",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F379B76AG/pasted_image_at_2016_11_25_03_07_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F379B76AG/download/pasted_image_at_2016_11_25_03_07_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F379B76AG-8a11863541/pasted_image_at_2016_11_25_03_07_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F379B76AG-8a11863541/pasted_image_at_2016_11_25_03_07_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F379B76AG-8a11863541/pasted_image_at_2016_11_25_03_07_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F379B76AG-8a11863541/pasted_image_at_2016_11_25_03_07_pm_720.png",
            "original_w": 781,
            "original_h": 405,
            "permalink": "https://appdirect.slack.com/files/ryan.cheng/F379B76AG/pasted_image_at_2016_11_25_03_07_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fire",
                    "users": [
                        "U13FJA80G",
                        "U1324MZRS",
                        "U2DU3TZL7",
                        "U2HN6FYRM"
                    ],
                    "count": 4
                },
                {
                    "name": "santa",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F37SYBV1C",
            "timestamp": 1480111631,
            "name": "Pasted image at 2016_11_25 03_06 PM.png",
            "title": "movember",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F37SYBV1C/pasted_image_at_2016_11_25_03_06_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F37SYBV1C/download/pasted_image_at_2016_11_25_03_06_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F37SYBV1C-5d2be1334a/pasted_image_at_2016_11_25_03_06_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F37SYBV1C-5d2be1334a/pasted_image_at_2016_11_25_03_06_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F37SYBV1C-5d2be1334a/pasted_image_at_2016_11_25_03_06_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F37SYBV1C-5d2be1334a/pasted_image_at_2016_11_25_03_06_pm_720.png",
            "original_w": 991,
            "original_h": 588,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F37SYBV1C/pasted_image_at_2016_11_25_03_06_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G",
                        "U2HN6FYRM",
                        "U08P10WPQ"
                    ],
                    "count": 3
                },
                {
                    "name": "joy",
                    "users": [
                        "U2G4XKRRU"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F37T9F2H5",
            "timestamp": 1480111537,
            "name": "Drawing (3).png",
            "title": "Drawing (3).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F37T9F2H5/drawing__3_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F37T9F2H5/download/drawing__3_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F37T9F2H5-bc24b7dcd0/drawing__3__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F37T9F2H5-bc24b7dcd0/drawing__3__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F37T9F2H5-bc24b7dcd0/drawing__3__160.png",
            "original_w": 599,
            "original_h": 358,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F37T9F2H5/drawing__3_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U1324MZRS",
                        "U29KAMLAK",
                        "U08P10WPQ"
                    ],
                    "count": 3
                },
                {
                    "name": "art",
                    "users": [
                        "U2PKVNC87",
                        "U2HN6FYRM",
                        "U08P10WPQ"
                    ],
                    "count": 3
                },
                {
                    "name": "tada",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F379MGAR3",
            "timestamp": 1480111507,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U211SR63A",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F379MGAR3/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F379MGAR3/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F379MGAR3-694e175b70/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F379MGAR3-694e175b70/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F379MGAR3-694e175b70/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F379MGAR3-694e175b70/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F379MGAR3-694e175b70/drawing_1024.png",
            "original_w": 1707,
            "original_h": 923,
            "permalink": "https://appdirect.slack.com/files/rita.bereski/F379MGAR3/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ok_hand",
                    "users": [
                        "U1324MZRS",
                        "U13FJA80G",
                        "U2JR1RSDA"
                    ],
                    "count": 3
                },
                {
                    "name": "sports_medal",
                    "users": [
                        "U2PKVNC87",
                        "U2D7F59RU",
                        "U2HN6FYRM",
                        "U29KAMLAK",
                        "U2CL304CW",
                        "U2G4XKRRU",
                        "U2DU3TZL7"
                    ],
                    "count": 7
                },
                {
                    "name": "hatching_chick",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "trophy",
                    "users": [
                        "U0ZV9NY93",
                        "U08P10WPQ",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F379MFV1T",
            "timestamp": 1480111499,
            "name": "Ideas - 31.png",
            "title": "Ideas - 31.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F379MFV1T/ideas_-_31.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F379MFV1T/download/ideas_-_31.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F379MFV1T-6c9c82ee6c/ideas_-_31_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F379MFV1T-6c9c82ee6c/ideas_-_31_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F379MFV1T-6c9c82ee6c/ideas_-_31_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F379MFV1T-6c9c82ee6c/ideas_-_31_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F379MFV1T-6c9c82ee6c/ideas_-_31_1024.png",
            "original_w": 750,
            "original_h": 1313,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F379MFV1T/ideas_-_31.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc36GM3S0H",
                "timestamp": 1480111499,
                "user": "U2PKVNC87",
                "is_intro": true,
                "comment": "On behalf of Beau."
            },
            "reactions": [
                {
                    "name": "thinking_face",
                    "users": [
                        "U1324MZRS",
                        "U211SR63A"
                    ],
                    "count": 2
                },
                {
                    "name": "hypnotoad",
                    "users": [
                        "U2JR1RSDA",
                        "U0ZV9NY93",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "joy",
                    "users": [
                        "U211SR63A",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                },
                {
                    "name": "pencil2",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F379MEWLD",
            "timestamp": 1480111484,
            "name": "Drawing (1).png",
            "title": "Drawing (1).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27D07RKN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F379MEWLD/drawing__1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F379MEWLD/download/drawing__1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F379MEWLD-e385f5410e/drawing__1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F379MEWLD-e385f5410e/drawing__1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F379MEWLD-e385f5410e/drawing__1__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F379MEWLD-e385f5410e/drawing__1__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F379MEWLD-e385f5410e/drawing__1__1024.png",
            "original_w": 1695,
            "original_h": 950,
            "permalink": "https://appdirect.slack.com/files/jernej.klancic/F379MEWLD/drawing__1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G",
                        "U211SR63A",
                        "U2HN6FYRM",
                        "U2DU3TZL7"
                    ],
                    "count": 4
                },
                {
                    "name": "muscle",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F379MCB0V",
            "timestamp": 1480111456,
            "name": "bearded_dragon.png",
            "title": "bearded_dragon.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F379MCB0V/bearded_dragon.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F379MCB0V/download/bearded_dragon.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F379MCB0V-10661f6743/bearded_dragon_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F379MCB0V-10661f6743/bearded_dragon_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F379MCB0V-10661f6743/bearded_dragon_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F379MCB0V-10661f6743/bearded_dragon_720.png",
            "original_w": 800,
            "original_h": 800,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F379MCB0V/bearded_dragon.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U2JR1RSDA",
                        "U211SR63A",
                        "U2DU3TZL7"
                    ],
                    "count": 3
                },
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G",
                        "U27D07RKN"
                    ],
                    "count": 2
                },
                {
                    "name": "joy",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F36GLU16D",
            "timestamp": 1480111437,
            "name": "Pasted image at 2016_11_25 03_03 PM.png",
            "title": "Weirded dragon",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL6JEQN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F36GLU16D/pasted_image_at_2016_11_25_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F36GLU16D/download/pasted_image_at_2016_11_25_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F36GLU16D-232f6b5c6a/pasted_image_at_2016_11_25_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F36GLU16D-232f6b5c6a/pasted_image_at_2016_11_25_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F36GLU16D-232f6b5c6a/pasted_image_at_2016_11_25_03_03_pm_160.png",
            "original_w": 606,
            "original_h": 371,
            "permalink": "https://appdirect.slack.com/files/steve.hansensmythe/F36GLU16D/pasted_image_at_2016_11_25_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pma",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "the_horns",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F379ALA4C",
            "timestamp": 1480111435,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F379ALA4C/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F379ALA4C/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F379ALA4C-976a75745b/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F379ALA4C-976a75745b/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F379ALA4C-976a75745b/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F379ALA4C-976a75745b/drawing_720.jpg",
            "original_w": 968,
            "original_h": 611,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F379ALA4C/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U1324MZRS",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                },
                {
                    "name": "metal",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F37T96V2B",
            "timestamp": 1480111433,
            "name": "Pasted image at 2016_11_25 03_03 PM.png",
            "title": "Pasted image at 2016-11-25, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F37T96V2B/pasted_image_at_2016_11_25_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F37T96V2B/download/pasted_image_at_2016_11_25_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F37T96V2B-ac62e97a83/pasted_image_at_2016_11_25_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F37T96V2B-ac62e97a83/pasted_image_at_2016_11_25_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F37T96V2B-ac62e97a83/pasted_image_at_2016_11_25_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F37T96V2B-ac62e97a83/pasted_image_at_2016_11_25_03_03_pm_720.png",
            "original_w": 965,
            "original_h": 460,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F37T96V2B/pasted_image_at_2016_11_25_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U08P10WPQ",
                        "U1324MZRS",
                        "U13FJA80G"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F36FPNJ80",
            "timestamp": 1480111431,
            "name": "Screen Shot 2016-11-25 at 3.03.35 PM.png",
            "title": "Screen Shot 2016-11-25 at 3.03.35 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F36FPNJ80/screen_shot_2016-11-25_at_3.03.35_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F36FPNJ80/download/screen_shot_2016-11-25_at_3.03.35_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F36FPNJ80-26007ce545/screen_shot_2016-11-25_at_3.03.35_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F36FPNJ80-26007ce545/screen_shot_2016-11-25_at_3.03.35_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F36FPNJ80-26007ce545/screen_shot_2016-11-25_at_3.03.35_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F36FPNJ80-26007ce545/screen_shot_2016-11-25_at_3.03.35_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F36FPNJ80-26007ce545/screen_shot_2016-11-25_at_3.03.35_pm_1024.png",
            "original_w": 1046,
            "original_h": 637,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F36FPNJ80/screen_shot_2016-11-25_at_3.03.35_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "smirk",
                    "users": [
                        "U1324MZRS",
                        "U2D7F59RU",
                        "U211SR63A",
                        "U2DU3TZL7"
                    ],
                    "count": 4
                },
                {
                    "name": "sweat_smile",
                    "users": [
                        "U2JR1RSDA",
                        "U2G4XKRRU"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "seat",
                    "users": [
                        "U27CJCFA9"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F37T96P7H",
            "timestamp": 1480111430,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U27CJCFA9",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F37T96P7H/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F37T96P7H/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F37T96P7H-bdeb92cc0e/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F37T96P7H-bdeb92cc0e/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F37T96P7H-bdeb92cc0e/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F37T96P7H-bdeb92cc0e/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F37T96P7H-bdeb92cc0e/drawing_1024.jpg",
            "original_w": 1695,
            "original_h": 910,
            "permalink": "https://appdirect.slack.com/files/ethan.hawthorne/F37T96P7H/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F37SXQPHU",
            "timestamp": 1480111403,
            "name": "Screen Shot 2016-11-25 at 3.02.55 PM.png",
            "title": "Screen Shot 2016-11-25 at 3.02.55 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ANK8V43",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F37SXQPHU/screen_shot_2016-11-25_at_3.02.55_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F37SXQPHU/download/screen_shot_2016-11-25_at_3.02.55_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F37SXQPHU-9cb70ad9ae/screen_shot_2016-11-25_at_3.02.55_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F37SXQPHU-9cb70ad9ae/screen_shot_2016-11-25_at_3.02.55_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F37SXQPHU-9cb70ad9ae/screen_shot_2016-11-25_at_3.02.55_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F37SXQPHU-9cb70ad9ae/screen_shot_2016-11-25_at_3.02.55_pm_720.png",
            "original_w": 862,
            "original_h": 526,
            "permalink": "https://appdirect.slack.com/files/darpan.shah/F37SXQPHU/screen_shot_2016-11-25_at_3.02.55_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F3772H3NE",
            "timestamp": 1480111393,
            "name": "Screen Shot 2016-11-25 at 3.02.57 PM.png",
            "title": "Screen Shot 2016-11-25 at 3.02.57 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3772H3NE/screen_shot_2016-11-25_at_3.02.57_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3772H3NE/download/screen_shot_2016-11-25_at_3.02.57_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3772H3NE-0ea36d5fbf/screen_shot_2016-11-25_at_3.02.57_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3772H3NE-0ea36d5fbf/screen_shot_2016-11-25_at_3.02.57_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3772H3NE-0ea36d5fbf/screen_shot_2016-11-25_at_3.02.57_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3772H3NE-0ea36d5fbf/screen_shot_2016-11-25_at_3.02.57_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F3772H3NE-0ea36d5fbf/screen_shot_2016-11-25_at_3.02.57_pm_1024.png",
            "original_w": 1604,
            "original_h": 1000,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F3772H3NE/screen_shot_2016-11-25_at_3.02.57_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "the_horns",
                    "users": [
                        "U2HN6FYRM",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "fish",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F3772GCG2",
            "timestamp": 1480111381,
            "name": "damn i am talented.jpg",
            "title": "damn i am talented.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U29KAMLAK",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3772GCG2/damn_i_am_talented.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3772GCG2/download/damn_i_am_talented.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3772GCG2-270987ae87/damn_i_am_talented_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3772GCG2-270987ae87/damn_i_am_talented_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3772GCG2-270987ae87/damn_i_am_talented_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F3772GCG2-270987ae87/damn_i_am_talented_720.jpg",
            "original_w": 900,
            "original_h": 675,
            "permalink": "https://appdirect.slack.com/files/jennifer.aubin/F3772GCG2/damn_i_am_talented.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "hushed",
                    "users": [
                        "U1324MZRS"
                    ],
                    "count": 1
                },
                {
                    "name": "thinking_face",
                    "users": [
                        "U0ZV27VBQ"
                    ],
                    "count": 1
                },
                {
                    "name": "fry",
                    "users": [
                        "U29PKD0NN",
                        "U2HN6FYRM",
                        "U13FJA80G",
                        "U27CJCFA9"
                    ],
                    "count": 4
                },
                {
                    "name": "hearts",
                    "users": [
                        "U0B52QL07"
                    ],
                    "count": 1
                },
                {
                    "name": "clap",
                    "users": [
                        "U0J6ZJTDM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F379AFCN8",
            "timestamp": 1480111369,
            "name": "Bearded_Dragon.PNG",
            "title": "Bearded_Dragon.PNG",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2D7F59RU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F379AFCN8/bearded_dragon.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F379AFCN8/download/bearded_dragon.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F379AFCN8-a8f350c536/bearded_dragon_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F379AFCN8-a8f350c536/bearded_dragon_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F379AFCN8-a8f350c536/bearded_dragon_160.png",
            "original_w": 652,
            "original_h": 232,
            "permalink": "https://appdirect.slack.com/files/george.dimitrov/F379AFCN8/bearded_dragon.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F379AF2LU",
            "timestamp": 1480111364,
            "name": "Drawing (1).jpeg",
            "title": "Drawing (1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F379AF2LU/drawing__1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F379AF2LU/download/drawing__1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F379AF2LU-491505e7c7/drawing__1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F379AF2LU-491505e7c7/drawing__1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F379AF2LU-491505e7c7/drawing__1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F379AF2LU-491505e7c7/drawing__1__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F379AF2LU-491505e7c7/drawing__1__1024.jpg",
            "original_w": 1141,
            "original_h": 549,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F379AF2LU/drawing__1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "clap",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F34KFF54K",
            "timestamp": 1479509655,
            "name": "Pasted image at 2016_11_18 03_54 PM.png",
            "title": "Pasted image at 2016-11-18, 3:54 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F34KFF54K/pasted_image_at_2016_11_18_03_54_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F34KFF54K/download/pasted_image_at_2016_11_18_03_54_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F34KFF54K-3abaef5e8b/pasted_image_at_2016_11_18_03_54_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F34KFF54K-3abaef5e8b/pasted_image_at_2016_11_18_03_54_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F34KFF54K-3abaef5e8b/pasted_image_at_2016_11_18_03_54_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F34KFF54K-3abaef5e8b/pasted_image_at_2016_11_18_03_54_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F34KFF54K-3abaef5e8b/pasted_image_at_2016_11_18_03_54_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F34KFF54K/pasted_image_at_2016_11_18_03_54_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "penguin",
                    "users": [
                        "U2DU3TZL7",
                        "U2D7F59RU"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F340A6S3S",
            "timestamp": 1479507450,
            "name": "Pasted image at 2016_11_18 03_17 PM.png",
            "title": "never_too_late",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F340A6S3S/pasted_image_at_2016_11_18_03_17_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F340A6S3S/download/pasted_image_at_2016_11_18_03_17_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F340A6S3S-b49c31dfb0/pasted_image_at_2016_11_18_03_17_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F340A6S3S-b49c31dfb0/pasted_image_at_2016_11_18_03_17_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F340A6S3S-b49c31dfb0/pasted_image_at_2016_11_18_03_17_pm_160.png",
            "original_w": 662,
            "original_h": 534,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F340A6S3S/pasted_image_at_2016_11_18_03_17_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "money_mouth_face",
                    "users": [
                        "U2HN6FYRM",
                        "U2P4EEKU5",
                        "U2PG17XKJ"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F34P63FS8",
            "timestamp": 1479506758,
            "name": "penguin1.png",
            "title": "penguin1.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27CJCFA9",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F34P63FS8/penguin1.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F34P63FS8/download/penguin1.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F34P63FS8-631eb0304a/penguin1_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F34P63FS8-631eb0304a/penguin1_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F34P63FS8-631eb0304a/penguin1_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F34P63FS8-631eb0304a/penguin1_720.png",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/ethan.hawthorne/F34P63FS8/penguin1.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F34PH32KF",
            "timestamp": 1479506744,
            "name": "Pasted image at 2016_11_18 03_05 PM.png",
            "title": "CashMowney",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F34PH32KF/pasted_image_at_2016_11_18_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F34PH32KF/download/pasted_image_at_2016_11_18_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F34PH32KF-8248609468/pasted_image_at_2016_11_18_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F34PH32KF-8248609468/pasted_image_at_2016_11_18_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F34PH32KF-8248609468/pasted_image_at_2016_11_18_03_05_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F34PH32KF-8248609468/pasted_image_at_2016_11_18_03_05_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F34PH32KF-8248609468/pasted_image_at_2016_11_18_03_05_pm_1024.png",
            "original_w": 1055,
            "original_h": 667,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F34PH32KF/pasted_image_at_2016_11_18_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F34JY2VGB",
            "timestamp": 1479506733,
            "name": "Drawing (3).png",
            "title": "Drawing (3).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F34JY2VGB/drawing__3_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F34JY2VGB/download/drawing__3_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F34JY2VGB-a74d35555e/drawing__3__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F34JY2VGB-a74d35555e/drawing__3__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F34JY2VGB-a74d35555e/drawing__3__160.png",
            "original_w": 536,
            "original_h": 520,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F34JY2VGB/drawing__3_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F34JXEQM9",
            "timestamp": 1479506654,
            "name": "Screen Shot 2016-11-18 at 3.03.34 PM.png",
            "title": "Screen Shot 2016-11-18 at 3.03.34 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F34JXEQM9/screen_shot_2016-11-18_at_3.03.34_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F34JXEQM9/download/screen_shot_2016-11-18_at_3.03.34_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F34JXEQM9-d5865cc17a/screen_shot_2016-11-18_at_3.03.34_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F34JXEQM9-d5865cc17a/screen_shot_2016-11-18_at_3.03.34_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F34JXEQM9-d5865cc17a/screen_shot_2016-11-18_at_3.03.34_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F34JXEQM9-d5865cc17a/screen_shot_2016-11-18_at_3.03.34_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F34JXEQM9-d5865cc17a/screen_shot_2016-11-18_at_3.03.34_pm_1024.png",
            "original_w": 1512,
            "original_h": 1172,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F34JXEQM9/screen_shot_2016-11-18_at_3.03.34_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "moneybag",
                    "users": [
                        "U2CL304CW",
                        "U2HN6FYRM"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F34P5AC3E",
            "timestamp": 1479506649,
            "name": "Screen Shot 2016-11-18 at 3.03.44 PM.png",
            "title": "Screen Shot 2016-11-18 at 3.03.44 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F34P5AC3E/screen_shot_2016-11-18_at_3.03.44_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F34P5AC3E/download/screen_shot_2016-11-18_at_3.03.44_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F34P5AC3E-d4951eab92/screen_shot_2016-11-18_at_3.03.44_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F34P5AC3E-d4951eab92/screen_shot_2016-11-18_at_3.03.44_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F34P5AC3E-d4951eab92/screen_shot_2016-11-18_at_3.03.44_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F34P5AC3E-d4951eab92/screen_shot_2016-11-18_at_3.03.44_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F34P5AC3E-d4951eab92/screen_shot_2016-11-18_at_3.03.44_pm_1024.png",
            "original_w": 1344,
            "original_h": 1078,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F34P5AC3E/screen_shot_2016-11-18_at_3.03.44_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc34JXEC9H",
                "timestamp": 1479506649,
                "user": "U21BYUQ1Z",
                "is_intro": true,
                "comment": "I WON!!!!!"
            }
        },
        {
            "id": "F3411P317",
            "timestamp": 1479506636,
            "name": "Pasted image at 2016_11_18 03_03 PM.png",
            "title": "Pasted image at 2016-11-18, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F3411P317/pasted_image_at_2016_11_18_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F3411P317/download/pasted_image_at_2016_11_18_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F3411P317-f59a8cc09a/pasted_image_at_2016_11_18_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F3411P317-f59a8cc09a/pasted_image_at_2016_11_18_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F3411P317-f59a8cc09a/pasted_image_at_2016_11_18_03_03_pm_160.png",
            "original_w": 517,
            "original_h": 546,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F3411P317/pasted_image_at_2016_11_18_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F34P58476",
            "timestamp": 1479506634,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27D07RKN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F34P58476/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F34P58476/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F34P58476-06139c4b5d/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F34P58476-06139c4b5d/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F34P58476-06139c4b5d/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F34P58476-06139c4b5d/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F34P58476-06139c4b5d/drawing_1024.png",
            "original_w": 1695,
            "original_h": 950,
            "permalink": "https://appdirect.slack.com/files/jernej.klancic/F34P58476/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F34LXMJF4",
            "timestamp": 1479506631,
            "name": "Pasted image at 2016_11_18 03_03 PM.png",
            "title": "Pasted image at 2016-11-18, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F34LXMJF4/pasted_image_at_2016_11_18_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F34LXMJF4/download/pasted_image_at_2016_11_18_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F34LXMJF4-14aa12d53c/pasted_image_at_2016_11_18_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F34LXMJF4-14aa12d53c/pasted_image_at_2016_11_18_03_03_pm_160.png",
            "original_w": 267,
            "original_h": 404,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F34LXMJF4/pasted_image_at_2016_11_18_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2YNP396Z",
            "timestamp": 1478293704,
            "name": "2f9.gif",
            "title": "2f9.gif",
            "mimetype": "image/gif",
            "filetype": "gif",
            "pretty_type": "GIF",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2YNP396Z/2f9.gif",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2YNP396Z/download/2f9.gif",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2YNP396Z-632d64bde8/2f9_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2YNP396Z-632d64bde8/2f9_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2YNP396Z-632d64bde8/2f9_160.png",
            "thumb_360_gif": "https://files.slack.com/files-tmb/T04V96SJW-F2YNP396Z-632d64bde8/2f9_360.gif",
            "thumb_480_gif": "https://files.slack.com/files-tmb/T04V96SJW-F2YNP396Z-632d64bde8/2f9_480.gif",
            "original_w": 500,
            "original_h": 214,
            "deanimate_gif": "https://files.slack.com/files-tmb/T04V96SJW-F2YNP396Z-632d64bde8/2f9_deanimate_gif.png",
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F2YNP396Z/2f9.gif",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U0ZV27VBQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "programmer",
                    "users": [
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "joy",
                    "users": [
                        "U2PKVNC87",
                        "U08P10WPQ",
                        "U13FJA80G",
                        "U2PG17XKJ"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F2XUR00F2",
            "timestamp": 1478293571,
            "name": "Pasted image at 2016_11_04 03_05 PM.png",
            "title": "HAMster - fixed",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2XUR00F2/pasted_image_at_2016_11_04_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2XUR00F2/download/pasted_image_at_2016_11_04_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2XUR00F2-5938b66a4a/pasted_image_at_2016_11_04_03_05_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2XUR00F2-5938b66a4a/pasted_image_at_2016_11_04_03_05_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2XUR00F2-5938b66a4a/pasted_image_at_2016_11_04_03_05_pm_160.png",
            "original_w": 522,
            "original_h": 493,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F2XUR00F2/pasted_image_at_2016_11_04_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pma",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2Y07FBG9",
            "timestamp": 1478293493,
            "name": "Screen Shot 2016-11-04 at 3.04.42 PM.png",
            "title": "Screen Shot 2016-11-04 at 3.04.42 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2Y07FBG9/screen_shot_2016-11-04_at_3.04.42_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2Y07FBG9/download/screen_shot_2016-11-04_at_3.04.42_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2Y07FBG9-49ce10ce9f/screen_shot_2016-11-04_at_3.04.42_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2Y07FBG9-49ce10ce9f/screen_shot_2016-11-04_at_3.04.42_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2Y07FBG9-49ce10ce9f/screen_shot_2016-11-04_at_3.04.42_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2Y07FBG9-49ce10ce9f/screen_shot_2016-11-04_at_3.04.42_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2Y07FBG9-49ce10ce9f/screen_shot_2016-11-04_at_3.04.42_pm_1024.png",
            "original_w": 1154,
            "original_h": 1216,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F2Y07FBG9/screen_shot_2016-11-04_at_3.04.42_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "question",
                    "users": [
                        "U13FJA80G",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2XUQC80G",
            "timestamp": 1478293491,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2XUQC80G/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2XUQC80G/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2XUQC80G-24be552f78/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2XUQC80G-24be552f78/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2XUQC80G-24be552f78/drawing_160.png",
            "original_w": 714,
            "original_h": 547,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F2XUQC80G/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2ZBL8CSJ",
            "timestamp": 1478293486,
            "name": "Ideas - 29.png",
            "title": "Ideas - 29.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2ZBL8CSJ/ideas_-_29.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2ZBL8CSJ/download/ideas_-_29.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBL8CSJ-535e683087/ideas_-_29_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBL8CSJ-535e683087/ideas_-_29_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBL8CSJ-535e683087/ideas_-_29_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBL8CSJ-535e683087/ideas_-_29_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBL8CSJ-535e683087/ideas_-_29_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F2ZBL8CSJ/ideas_-_29.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc2YL2UZ5G",
                "timestamp": 1478293486,
                "user": "U2PKVNC87",
                "is_intro": true,
                "comment": "Posted for Beau"
            },
            "reactions": [
                {
                    "name": "eyes",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2ZBXA2P9",
            "timestamp": 1478293466,
            "name": "Pasted image at 2016_11_04 03_04 PM.png",
            "title": "HAMster",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2ZBXA2P9/pasted_image_at_2016_11_04_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2ZBXA2P9/download/pasted_image_at_2016_11_04_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBXA2P9-f320be5c1e/pasted_image_at_2016_11_04_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBXA2P9-f320be5c1e/pasted_image_at_2016_11_04_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBXA2P9-f320be5c1e/pasted_image_at_2016_11_04_03_04_pm_160.png",
            "original_w": 503,
            "original_h": 448,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F2ZBXA2P9/pasted_image_at_2016_11_04_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2ZBX9031",
            "timestamp": 1478293462,
            "name": "Drawing (1).png",
            "title": "Drawing (1).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2B523PT9",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2ZBX9031/drawing__1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2ZBX9031/download/drawing__1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBX9031-cdc635446a/drawing__1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBX9031-cdc635446a/drawing__1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBX9031-cdc635446a/drawing__1__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBX9031-cdc635446a/drawing__1__720.png",
            "original_w": 737,
            "original_h": 668,
            "permalink": "https://appdirect.slack.com/files/tony.giang/F2ZBX9031/drawing__1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2Y077UGZ",
            "timestamp": 1478293458,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U211SR63A",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2Y077UGZ/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2Y077UGZ/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2Y077UGZ-c106c9f027/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2Y077UGZ-c106c9f027/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2Y077UGZ-c106c9f027/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2Y077UGZ-c106c9f027/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2Y077UGZ-c106c9f027/drawing_1024.jpg",
            "original_w": 1689,
            "original_h": 840,
            "permalink": "https://appdirect.slack.com/files/rita.bereski/F2Y077UGZ/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "tada",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2YNA3MT6",
            "timestamp": 1478293456,
            "name": "Drawing (1).jpeg",
            "title": "Drawing (1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2YNA3MT6/drawing__1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2YNA3MT6/download/drawing__1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2YNA3MT6-841acad08c/drawing__1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2YNA3MT6-841acad08c/drawing__1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2YNA3MT6-841acad08c/drawing__1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2YNA3MT6-841acad08c/drawing__1__720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2YNA3MT6-841acad08c/drawing__1__1024.jpg",
            "original_w": 1695,
            "original_h": 934,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F2YNA3MT6/drawing__1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2YJ1Q9PV",
            "timestamp": 1478293438,
            "name": "Pasted image at 2016_11_04 03_03 PM.png",
            "title": "Pasted image at 2016-11-04, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2YJ1Q9PV/pasted_image_at_2016_11_04_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2YJ1Q9PV/download/pasted_image_at_2016_11_04_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2YJ1Q9PV-8448d58245/pasted_image_at_2016_11_04_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2YJ1Q9PV-8448d58245/pasted_image_at_2016_11_04_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2YJ1Q9PV-8448d58245/pasted_image_at_2016_11_04_03_03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2YJ1Q9PV-8448d58245/pasted_image_at_2016_11_04_03_03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2YJ1Q9PV-8448d58245/pasted_image_at_2016_11_04_03_03_pm_1024.png",
            "original_w": 1055,
            "original_h": 644,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F2YJ1Q9PV/pasted_image_at_2016_11_04_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pokemonball",
                    "users": [
                        "U0ZV27VBQ",
                        "U211SR63A",
                        "U2DU3TZL7",
                        "U13FJA80G"
                    ],
                    "count": 4
                },
                {
                    "name": "open_mouth",
                    "users": [
                        "U27DJ3JT0"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2ZBWV2PR",
            "timestamp": 1478293423,
            "name": "hamster.png",
            "title": "hamster.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2ZBWV2PR/hamster.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2ZBWV2PR/download/hamster.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBWV2PR-c28e2c3079/hamster_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBWV2PR-c28e2c3079/hamster_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBWV2PR-c28e2c3079/hamster_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBWV2PR-c28e2c3079/hamster_720.png",
            "original_w": 800,
            "original_h": 800,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F2ZBWV2PR/hamster.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pma",
                    "users": [
                        "U13FJA80G",
                        "U211SR63A",
                        "U1000HJ8H"
                    ],
                    "count": 3
                },
                {
                    "name": "ghost",
                    "users": [
                        "U0ZV9NY93"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2ZBKP9P0",
            "timestamp": 1478293418,
            "name": "Drawing(2).png",
            "title": "Drawing(2).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2ZBKP9P0/drawing_2_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2ZBKP9P0/download/drawing_2_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBKP9P0-478fccd4b3/drawing_2__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBKP9P0-478fccd4b3/drawing_2__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBKP9P0-478fccd4b3/drawing_2__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBKP9P0-478fccd4b3/drawing_2__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2ZBKP9P0-478fccd4b3/drawing_2__1024.png",
            "original_w": 1146,
            "original_h": 679,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F2ZBKP9P0/drawing_2_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fire",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2YL2C05Q",
            "timestamp": 1478293408,
            "name": "Screen Shot 2016-11-04 at 3.03.08 PM.png",
            "title": "Screen Shot 2016-11-04 at 3.03.08 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2YL2C05Q/screen_shot_2016-11-04_at_3.03.08_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2YL2C05Q/download/screen_shot_2016-11-04_at_3.03.08_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2YL2C05Q-717e7f2b41/screen_shot_2016-11-04_at_3.03.08_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2YL2C05Q-717e7f2b41/screen_shot_2016-11-04_at_3.03.08_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2YL2C05Q-717e7f2b41/screen_shot_2016-11-04_at_3.03.08_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2YL2C05Q-717e7f2b41/screen_shot_2016-11-04_at_3.03.08_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2YL2C05Q-717e7f2b41/screen_shot_2016-11-04_at_3.03.08_pm_1024.png",
            "original_w": 2316,
            "original_h": 1538,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F2YL2C05Q/screen_shot_2016-11-04_at_3.03.08_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "airplane",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2Y06SHAM",
            "timestamp": 1478293403,
            "name": "Screen Shot 2016-11-04 at 2.03.06 PM.png",
            "title": "Screen Shot 2016-11-04 at 2.03.06 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2Y06SHAM/screen_shot_2016-11-04_at_2.03.06_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2Y06SHAM/download/screen_shot_2016-11-04_at_2.03.06_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2Y06SHAM-e860e7cd56/screen_shot_2016-11-04_at_2.03.06_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2Y06SHAM-e860e7cd56/screen_shot_2016-11-04_at_2.03.06_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2Y06SHAM-e860e7cd56/screen_shot_2016-11-04_at_2.03.06_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2Y06SHAM-e860e7cd56/screen_shot_2016-11-04_at_2.03.06_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2Y06SHAM-e860e7cd56/screen_shot_2016-11-04_at_2.03.06_pm_1024.png",
            "original_w": 1866,
            "original_h": 1350,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F2Y06SHAM/screen_shot_2016-11-04_at_2.03.06_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "crossed_swords",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "eyes",
                    "users": [
                        "U13FJA80G",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2YN9NEH2",
            "timestamp": 1478293400,
            "name": "Screen Shot 2016-11-04 at 3.02.07 PM.png",
            "title": "Screen Shot 2016-11-04 at 3.02.07 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2YN9NEH2/screen_shot_2016-11-04_at_3.02.07_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2YN9NEH2/download/screen_shot_2016-11-04_at_3.02.07_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2YN9NEH2-486c1552fc/screen_shot_2016-11-04_at_3.02.07_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2YN9NEH2-486c1552fc/screen_shot_2016-11-04_at_3.02.07_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2YN9NEH2-486c1552fc/screen_shot_2016-11-04_at_3.02.07_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2YN9NEH2-486c1552fc/screen_shot_2016-11-04_at_3.02.07_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2YN9NEH2-486c1552fc/screen_shot_2016-11-04_at_3.02.07_pm_1024.png",
            "original_w": 1840,
            "original_h": 900,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F2YN9NEH2/screen_shot_2016-11-04_at_3.02.07_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "bat",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2Y06LBUZ",
            "timestamp": 1478293386,
            "name": "Screen Shot 2016-11-04 at 3.02.36 PM.png",
            "title": "HAMster.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2Y06LBUZ/screen_shot_2016-11-04_at_3.02.36_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2Y06LBUZ/download/screen_shot_2016-11-04_at_3.02.36_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2Y06LBUZ-12662efe7f/screen_shot_2016-11-04_at_3.02.36_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2Y06LBUZ-12662efe7f/screen_shot_2016-11-04_at_3.02.36_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2Y06LBUZ-12662efe7f/screen_shot_2016-11-04_at_3.02.36_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2Y06LBUZ-12662efe7f/screen_shot_2016-11-04_at_3.02.36_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2Y06LBUZ-12662efe7f/screen_shot_2016-11-04_at_3.02.36_pm_1024.png",
            "original_w": 1039,
            "original_h": 581,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F2Y06LBUZ/screen_shot_2016-11-04_at_3.02.36_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "pig2",
                    "users": [
                        "U0ZV27VBQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "smirk",
                    "users": [
                        "U27DJ3JT0",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                },
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2YJ1A7A7",
            "timestamp": 1478293371,
            "name": "Pasted image at 2016_11_04 03_02 PM.png",
            "title": "Pasted image at 2016-11-04, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2YJ1A7A7/pasted_image_at_2016_11_04_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2YJ1A7A7/download/pasted_image_at_2016_11_04_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2YJ1A7A7-3b8ee7f2ea/pasted_image_at_2016_11_04_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2YJ1A7A7-3b8ee7f2ea/pasted_image_at_2016_11_04_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2YJ1A7A7-3b8ee7f2ea/pasted_image_at_2016_11_04_03_02_pm_160.png",
            "original_w": 589,
            "original_h": 601,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F2YJ1A7A7/pasted_image_at_2016_11_04_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "cloud",
                    "users": [
                        "U0ZV27VBQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "canada",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2W9M2DFS",
            "timestamp": 1477922630,
            "name": "Pasted image at 2016_10_31 08_03 AM.png",
            "title": "playboy_vampire",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2W9M2DFS/pasted_image_at_2016_10_31_08_03_am.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2W9M2DFS/download/pasted_image_at_2016_10_31_08_03_am.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2W9M2DFS-5b79436799/pasted_image_at_2016_10_31_08_03_am_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2W9M2DFS-5b79436799/pasted_image_at_2016_10_31_08_03_am_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2W9M2DFS-5b79436799/pasted_image_at_2016_10_31_08_03_am_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2W9M2DFS-5b79436799/pasted_image_at_2016_10_31_08_03_am_720.png",
            "original_w": 982,
            "original_h": 570,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F2W9M2DFS/pasted_image_at_2016_10_31_08_03_am.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2VPRB0BY",
            "timestamp": 1477690397,
            "name": "Drawing(1).png",
            "title": "Drawing(1).png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPRB0BY/drawing_1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPRB0BY/download/drawing_1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRB0BY-8e072e9944/drawing_1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRB0BY-8e072e9944/drawing_1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRB0BY-8e072e9944/drawing_1__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRB0BY-8e072e9944/drawing_1__720.png",
            "original_w": 993,
            "original_h": 676,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F2VPRB0BY/drawing_1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc2VQ31G1F",
                "timestamp": 1477690397,
                "user": "U08P10WPQ",
                "is_intro": true,
                "comment": "33 minute drawing (sorry Mark!)"
            },
            "reactions": [
                {
                    "name": "crossed_swords",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2VMXRPBM",
            "timestamp": 1477688768,
            "name": "Pasted image at 2016_10_28 03_06 PM.png",
            "title": "Pasted image at 2016-10-28, 3:06 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VMXRPBM/pasted_image_at_2016_10_28_03_06_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VMXRPBM/download/pasted_image_at_2016_10_28_03_06_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VMXRPBM-450ccf5a92/pasted_image_at_2016_10_28_03_06_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VMXRPBM-450ccf5a92/pasted_image_at_2016_10_28_03_06_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VMXRPBM-450ccf5a92/pasted_image_at_2016_10_28_03_06_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VMXRPBM-450ccf5a92/pasted_image_at_2016_10_28_03_06_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VMXRPBM-450ccf5a92/pasted_image_at_2016_10_28_03_06_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F2VMXRPBM/pasted_image_at_2016_10_28_03_06_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "scream",
                    "users": [
                        "U08P10WPQ",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2VPLSMA9",
            "timestamp": 1477688709,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27EX0NFP",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPLSMA9/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPLSMA9/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPLSMA9-f388a958b1/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPLSMA9-f388a958b1/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPLSMA9-f388a958b1/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPLSMA9-f388a958b1/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPLSMA9-f388a958b1/drawing_1024.png",
            "original_w": 1188,
            "original_h": 739,
            "permalink": "https://appdirect.slack.com/files/jian.weng/F2VPLSMA9/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2VPR6X3R",
            "timestamp": 1477688687,
            "name": "Drawing (1).png",
            "title": "killer bunny",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0N226FV4",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPR6X3R/drawing__1_.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPR6X3R/download/drawing__1_.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPR6X3R-95fb320c81/drawing__1__360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPR6X3R-95fb320c81/drawing__1__480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPR6X3R-95fb320c81/drawing__1__160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPR6X3R-95fb320c81/drawing__1__720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPR6X3R-95fb320c81/drawing__1__1024.png",
            "original_w": 1695,
            "original_h": 943,
            "permalink": "https://appdirect.slack.com/files/ken.friesen/F2VPR6X3R/drawing__1_.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "bat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2VPDSWBS",
            "timestamp": 1477688671,
            "name": "Pasted image at 2016_10_28 03_04 PM.png",
            "title": "Pasted image at 2016-10-28, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPDSWBS/pasted_image_at_2016_10_28_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPDSWBS/download/pasted_image_at_2016_10_28_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDSWBS-f2a41eb5ce/pasted_image_at_2016_10_28_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDSWBS-f2a41eb5ce/pasted_image_at_2016_10_28_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDSWBS-f2a41eb5ce/pasted_image_at_2016_10_28_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDSWBS-f2a41eb5ce/pasted_image_at_2016_10_28_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDSWBS-f2a41eb5ce/pasted_image_at_2016_10_28_03_04_pm_1024.png",
            "original_w": 1055,
            "original_h": 644,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F2VPDSWBS/pasted_image_at_2016_10_28_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G",
                        "U27DJ3JT0",
                        "U2D7F59RU",
                        "U1000HJ8H",
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 6
                }
            ]
        },
        {
            "id": "F2VPQV0LX",
            "timestamp": 1477688652,
            "name": "Screen Shot 2016-10-28 at 3.03.53 PM.png",
            "title": "Screen Shot 2016-10-28 at 3.03.53 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPQV0LX/screen_shot_2016-10-28_at_3.03.53_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPQV0LX/download/screen_shot_2016-10-28_at_3.03.53_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQV0LX-9156dd2def/screen_shot_2016-10-28_at_3.03.53_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQV0LX-9156dd2def/screen_shot_2016-10-28_at_3.03.53_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQV0LX-9156dd2def/screen_shot_2016-10-28_at_3.03.53_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQV0LX-9156dd2def/screen_shot_2016-10-28_at_3.03.53_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQV0LX-9156dd2def/screen_shot_2016-10-28_at_3.03.53_pm_1024.png",
            "original_w": 1313,
            "original_h": 694,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F2VPQV0LX/screen_shot_2016-10-28_at_3.03.53_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "hankey",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2VPDHS9E",
            "timestamp": 1477688631,
            "name": "Pasted image at 2016_10_28 03_03 PM.png",
            "title": "SHS Bunny",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2CL6JEQN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPDHS9E/pasted_image_at_2016_10_28_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPDHS9E/download/pasted_image_at_2016_10_28_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDHS9E-d8be5b3630/pasted_image_at_2016_10_28_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDHS9E-d8be5b3630/pasted_image_at_2016_10_28_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDHS9E-d8be5b3630/pasted_image_at_2016_10_28_03_03_pm_160.png",
            "original_w": 466,
            "original_h": 579,
            "permalink": "https://appdirect.slack.com/files/steve.hansensmythe/F2VPDHS9E/pasted_image_at_2016_10_28_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "bat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "fire",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2VPRLSC9",
            "timestamp": 1477688630,
            "name": "Screen Shot 2016-10-28 at 3.03.28 PM.png",
            "title": "Screen Shot 2016-10-28 at 3.03.28 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPRLSC9/screen_shot_2016-10-28_at_3.03.28_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPRLSC9/download/screen_shot_2016-10-28_at_3.03.28_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRLSC9-33d9720672/screen_shot_2016-10-28_at_3.03.28_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRLSC9-33d9720672/screen_shot_2016-10-28_at_3.03.28_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRLSC9-33d9720672/screen_shot_2016-10-28_at_3.03.28_pm_160.png",
            "original_w": 589,
            "original_h": 701,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F2VPRLSC9/screen_shot_2016-10-28_at_3.03.28_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc2VPX7C3C",
                "timestamp": 1477688630,
                "user": "U21BYUQ1Z",
                "is_intro": true,
                "comment": "Vampire Bunny"
            },
            "reactions": [
                {
                    "name": "pma",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "eyes",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2VPL9KRB",
            "timestamp": 1477688615,
            "name": "Screen Shot 2016-10-28 at 3.03.17 PM.png",
            "title": "Screen Shot 2016-10-28 at 3.03.17 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPL9KRB/screen_shot_2016-10-28_at_3.03.17_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPL9KRB/download/screen_shot_2016-10-28_at_3.03.17_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPL9KRB-49b78b25d5/screen_shot_2016-10-28_at_3.03.17_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPL9KRB-49b78b25d5/screen_shot_2016-10-28_at_3.03.17_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPL9KRB-49b78b25d5/screen_shot_2016-10-28_at_3.03.17_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPL9KRB-49b78b25d5/screen_shot_2016-10-28_at_3.03.17_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPL9KRB-49b78b25d5/screen_shot_2016-10-28_at_3.03.17_pm_1024.png",
            "original_w": 1036,
            "original_h": 1188,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F2VPL9KRB/screen_shot_2016-10-28_at_3.03.17_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "angel",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2VMWQPMH",
            "timestamp": 1477688607,
            "name": "Screen Shot 2016-10-28 at 3.03.08 PM.png",
            "title": "Screen Shot 2016-10-28 at 3.03.08 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VMWQPMH/screen_shot_2016-10-28_at_3.03.08_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VMWQPMH/download/screen_shot_2016-10-28_at_3.03.08_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VMWQPMH-d72baa5487/screen_shot_2016-10-28_at_3.03.08_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VMWQPMH-d72baa5487/screen_shot_2016-10-28_at_3.03.08_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VMWQPMH-d72baa5487/screen_shot_2016-10-28_at_3.03.08_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VMWQPMH-d72baa5487/screen_shot_2016-10-28_at_3.03.08_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VMWQPMH-d72baa5487/screen_shot_2016-10-28_at_3.03.08_pm_1024.png",
            "original_w": 1514,
            "original_h": 1086,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F2VMWQPMH/screen_shot_2016-10-28_at_3.03.08_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy_cat",
                    "users": [
                        "U054FNLPS",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2VPRH08Z",
            "timestamp": 1477688606,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27D07RKN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPRH08Z/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPRH08Z/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRH08Z-7d36678f96/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRH08Z-7d36678f96/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRH08Z-7d36678f96/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRH08Z-7d36678f96/drawing_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPRH08Z-7d36678f96/drawing_1024.png",
            "original_w": 1695,
            "original_h": 950,
            "permalink": "https://appdirect.slack.com/files/jernej.klancic/F2VPRH08Z/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "jack_o_lantern",
                    "users": [
                        "U08P10WPQ",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2VPDRPRC",
            "timestamp": 1477688600,
            "name": "Drawing (1).jpeg",
            "title": "Drawing (1).jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPDRPRC/drawing__1_.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPDRPRC/download/drawing__1_.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDRPRC-9e44c31fa6/drawing__1__360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDRPRC-9e44c31fa6/drawing__1__480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDRPRC-9e44c31fa6/drawing__1__160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPDRPRC-9e44c31fa6/drawing__1__720.jpg",
            "original_w": 733,
            "original_h": 544,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F2VPDRPRC/drawing__1_.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "bat",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                },
                {
                    "name": "white_circle",
                    "users": [
                        "U2PG17XKJ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2VP9LSJY",
            "timestamp": 1477688599,
            "name": "Drawing.png",
            "title": "Drawing.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VP9LSJY/drawing.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VP9LSJY/download/drawing.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VP9LSJY-fe87ec28fd/drawing_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VP9LSJY-fe87ec28fd/drawing_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VP9LSJY-fe87ec28fd/drawing_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VP9LSJY-fe87ec28fd/drawing_720.png",
            "original_w": 993,
            "original_h": 676,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F2VP9LSJY/drawing.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2VPQHP63",
            "timestamp": 1477688595,
            "name": "Pasted image at 2016_10_28 03_03 PM.png",
            "title": "vampbun",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPQHP63/pasted_image_at_2016_10_28_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPQHP63/download/pasted_image_at_2016_10_28_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQHP63-ee958c0b4c/pasted_image_at_2016_10_28_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQHP63-ee958c0b4c/pasted_image_at_2016_10_28_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQHP63-ee958c0b4c/pasted_image_at_2016_10_28_03_03_pm_160.png",
            "original_w": 418,
            "original_h": 511,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F2VPQHP63/pasted_image_at_2016_10_28_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "crossed_swords",
                    "users": [
                        "U054FNLPS",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "skull",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2VPWSNM8",
            "timestamp": 1477688588,
            "name": "Screen Shot 2016-10-28 at 3.02.56 PM.png",
            "title": "Screen Shot 2016-10-28 at 3.02.56 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPWSNM8/screen_shot_2016-10-28_at_3.02.56_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPWSNM8/download/screen_shot_2016-10-28_at_3.02.56_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPWSNM8-1227e27710/screen_shot_2016-10-28_at_3.02.56_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPWSNM8-1227e27710/screen_shot_2016-10-28_at_3.02.56_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPWSNM8-1227e27710/screen_shot_2016-10-28_at_3.02.56_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPWSNM8-1227e27710/screen_shot_2016-10-28_at_3.02.56_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPWSNM8-1227e27710/screen_shot_2016-10-28_at_3.02.56_pm_1024.png",
            "original_w": 1406,
            "original_h": 1342,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F2VPWSNM8/screen_shot_2016-10-28_at_3.02.56_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "flashlight",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2VMWJ7J7",
            "timestamp": 1477688586,
            "name": "Vamp.jpg",
            "title": "Vamp.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2PKR3B2S",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VMWJ7J7/vamp.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VMWJ7J7/download/vamp.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VMWJ7J7-7199bc9ecf/vamp_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VMWJ7J7-7199bc9ecf/vamp_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VMWJ7J7-7199bc9ecf/vamp_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VMWJ7J7-7199bc9ecf/vamp_720.jpg",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/darnell.shinbine/F2VMWJ7J7/vamp.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "bat",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2VPL04NR",
            "timestamp": 1477688575,
            "name": "Vampire_Bunny.jpeg",
            "title": "Vampire_Bunny.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2D7F59RU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPL04NR/vampire_bunny.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPL04NR/download/vampire_bunny.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPL04NR-212ab0c496/vampire_bunny_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPL04NR-212ab0c496/vampire_bunny_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPL04NR-212ab0c496/vampire_bunny_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPL04NR-212ab0c496/vampire_bunny_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPL04NR-212ab0c496/vampire_bunny_1024.jpg",
            "original_w": 1311,
            "original_h": 695,
            "permalink": "https://appdirect.slack.com/files/george.dimitrov/F2VPL04NR/vampire_bunny.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "question",
                    "users": [
                        "U27DJ3JT0",
                        "U08P10WPQ",
                        "U13FJA80G",
                        "U2PG17XKJ"
                    ],
                    "count": 4
                }
            ]
        },
        {
            "id": "F2VPQB623",
            "timestamp": 1477688562,
            "name": "Screen Shot 2016-10-28 at 3.02.33 PM.png",
            "title": "Screen Shot 2016-10-28 at 3.02.33 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPQB623/screen_shot_2016-10-28_at_3.02.33_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPQB623/download/screen_shot_2016-10-28_at_3.02.33_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQB623-da7f8a9792/screen_shot_2016-10-28_at_3.02.33_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQB623-da7f8a9792/screen_shot_2016-10-28_at_3.02.33_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQB623-da7f8a9792/screen_shot_2016-10-28_at_3.02.33_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQB623-da7f8a9792/screen_shot_2016-10-28_at_3.02.33_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQB623-da7f8a9792/screen_shot_2016-10-28_at_3.02.33_pm_1024.png",
            "original_w": 1114,
            "original_h": 698,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F2VPQB623/screen_shot_2016-10-28_at_3.02.33_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "question",
                    "users": [
                        "U08P10WPQ",
                        "U13FJA80G",
                        "U2PG17XKJ"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F2VPWGRHQ",
            "timestamp": 1477688535,
            "name": "Screen Shot 2016-10-28 at 3.01.46 PM.png",
            "title": "slasherbunny.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPWGRHQ/screen_shot_2016-10-28_at_3.01.46_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPWGRHQ/download/screen_shot_2016-10-28_at_3.01.46_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPWGRHQ-607d69a77e/screen_shot_2016-10-28_at_3.01.46_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPWGRHQ-607d69a77e/screen_shot_2016-10-28_at_3.01.46_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPWGRHQ-607d69a77e/screen_shot_2016-10-28_at_3.01.46_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPWGRHQ-607d69a77e/screen_shot_2016-10-28_at_3.01.46_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPWGRHQ-607d69a77e/screen_shot_2016-10-28_at_3.01.46_pm_1024.png",
            "original_w": 1254,
            "original_h": 1204,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F2VPWGRHQ/screen_shot_2016-10-28_at_3.01.46_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2VPKLS3X",
            "timestamp": 1477688532,
            "name": "Drawing.jpeg",
            "title": "Drawing.jpeg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPKLS3X/drawing.jpeg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPKLS3X/download/drawing.jpeg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPKLS3X-0b84a49bbe/drawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPKLS3X-0b84a49bbe/drawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPKLS3X-0b84a49bbe/drawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2VPKLS3X-0b84a49bbe/drawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2VPKLS3X-0b84a49bbe/drawing_1024.jpg",
            "original_w": 1141,
            "original_h": 598,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F2VPKLS3X/drawing.jpeg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2VPQ184X",
            "timestamp": 1477688520,
            "name": "Pasted image at 2016_10_28 03_01 PM.png",
            "title": "Pasted image at 2016-10-28, 3:01 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2VPQ184X/pasted_image_at_2016_10_28_03_01_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2VPQ184X/download/pasted_image_at_2016_10_28_03_01_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQ184X-2e669ab758/pasted_image_at_2016_10_28_03_01_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQ184X-2e669ab758/pasted_image_at_2016_10_28_03_01_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2VPQ184X-2e669ab758/pasted_image_at_2016_10_28_03_01_pm_160.png",
            "original_w": 556,
            "original_h": 650,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F2VPQ184X/pasted_image_at_2016_10_28_03_01_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "ghost",
                    "users": [
                        "U054FNLPS"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2SP901PF",
            "timestamp": 1477085809,
            "name": "Screen Shot 2016-10-21 at 3.36.14 PM.png",
            "title": "Screen Shot 2016-10-21 at 3.36.14 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SP901PF/screen_shot_2016-10-21_at_3.36.14_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SP901PF/download/screen_shot_2016-10-21_at_3.36.14_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SP901PF-6f42dccf85/screen_shot_2016-10-21_at_3.36.14_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SP901PF-6f42dccf85/screen_shot_2016-10-21_at_3.36.14_pm_160.png",
            "original_w": 414,
            "original_h": 181,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F2SP901PF/screen_shot_2016-10-21_at_3.36.14_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2SP1JC6A",
            "timestamp": 1477085597,
            "name": "Pasted image at 2016_10_21 03_33 PM.png",
            "title": "never_too_late",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SP1JC6A/pasted_image_at_2016_10_21_03_33_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SP1JC6A/download/pasted_image_at_2016_10_21_03_33_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SP1JC6A-e005a440f1/pasted_image_at_2016_10_21_03_33_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SP1JC6A-e005a440f1/pasted_image_at_2016_10_21_03_33_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SP1JC6A-e005a440f1/pasted_image_at_2016_10_21_03_33_pm_160.png",
            "original_w": 702,
            "original_h": 493,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F2SP1JC6A/pasted_image_at_2016_10_21_03_33_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2G4XKRRU"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2SM6F2BD",
            "timestamp": 1477083957,
            "name": "mandril.png",
            "title": "mandril.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2HN6FYRM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SM6F2BD/mandril.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SM6F2BD/download/mandril.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SM6F2BD-674268fe88/mandril_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SM6F2BD-674268fe88/mandril_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SM6F2BD-674268fe88/mandril_160.png",
            "original_w": 468,
            "original_h": 604,
            "permalink": "https://appdirect.slack.com/files/troy.kinsella/F2SM6F2BD/mandril.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2SM69DSP",
            "timestamp": 1477083924,
            "name": "Screen Shot 2016-10-21 at 3.05.10 PM.png",
            "title": "Screen Shot 2016-10-21 at 3.05.10 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U29PKD0NN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SM69DSP/screen_shot_2016-10-21_at_3.05.10_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SM69DSP/download/screen_shot_2016-10-21_at_3.05.10_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SM69DSP-06f01a421a/screen_shot_2016-10-21_at_3.05.10_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SM69DSP-06f01a421a/screen_shot_2016-10-21_at_3.05.10_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SM69DSP-06f01a421a/screen_shot_2016-10-21_at_3.05.10_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2SM69DSP-06f01a421a/screen_shot_2016-10-21_at_3.05.10_pm_720.png",
            "original_w": 806,
            "original_h": 572,
            "permalink": "https://appdirect.slack.com/files/colin.chong/F2SM69DSP/screen_shot_2016-10-21_at_3.05.10_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "cry",
                    "users": [
                        "U0ZV27VBQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "joy",
                    "users": [
                        "U2D7F59RU"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2SNVV0KX",
            "timestamp": 1477083916,
            "name": "Screen Shot 2016-10-21 at 3.04.52 PM.png",
            "title": "Screen Shot 2016-10-21 at 3.04.52 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ANK8V43",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SNVV0KX/screen_shot_2016-10-21_at_3.04.52_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SNVV0KX/download/screen_shot_2016-10-21_at_3.04.52_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SNVV0KX-0f8c42947a/screen_shot_2016-10-21_at_3.04.52_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SNVV0KX-0f8c42947a/screen_shot_2016-10-21_at_3.04.52_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SNVV0KX-0f8c42947a/screen_shot_2016-10-21_at_3.04.52_pm_160.png",
            "original_w": 573,
            "original_h": 516,
            "permalink": "https://appdirect.slack.com/files/darpan.shah/F2SNVV0KX/screen_shot_2016-10-21_at_3.04.52_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2SP6G02E",
            "timestamp": 1477083916,
            "name": "Mandrill.jpg",
            "title": "Mandrill.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2PKR3B2S",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SP6G02E/mandrill.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SP6G02E/download/mandrill.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SP6G02E-ae3976ed8d/mandrill_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SP6G02E-ae3976ed8d/mandrill_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SP6G02E-ae3976ed8d/mandrill_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2SP6G02E-ae3976ed8d/mandrill_720.jpg",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/darnell.shinbine/F2SP6G02E/mandrill.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2SNPNCTY",
            "timestamp": 1477083895,
            "name": "Pasted image at 2016_10_21 03_04 PM.png",
            "title": "Pasted image at 2016-10-21, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SNPNCTY/pasted_image_at_2016_10_21_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SNPNCTY/download/pasted_image_at_2016_10_21_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SNPNCTY-2369fc9ee2/pasted_image_at_2016_10_21_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SNPNCTY-2369fc9ee2/pasted_image_at_2016_10_21_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SNPNCTY-2369fc9ee2/pasted_image_at_2016_10_21_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2SNPNCTY-2369fc9ee2/pasted_image_at_2016_10_21_03_04_pm_720.png",
            "original_w": 800,
            "original_h": 450,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F2SNPNCTY/pasted_image_at_2016_10_21_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2SP09A79",
            "timestamp": 1477083888,
            "name": "Screen Shot 2016-10-21 at 3.04.03 PM.png",
            "title": "Screen Shot 2016-10-21 at 3.04.03 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0B52QL07",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SP09A79/screen_shot_2016-10-21_at_3.04.03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SP09A79/download/screen_shot_2016-10-21_at_3.04.03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SP09A79-b6046bc88e/screen_shot_2016-10-21_at_3.04.03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SP09A79-b6046bc88e/screen_shot_2016-10-21_at_3.04.03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SP09A79-b6046bc88e/screen_shot_2016-10-21_at_3.04.03_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2SP09A79-b6046bc88e/screen_shot_2016-10-21_at_3.04.03_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2SP09A79-b6046bc88e/screen_shot_2016-10-21_at_3.04.03_pm_1024.png",
            "original_w": 2184,
            "original_h": 1324,
            "permalink": "https://appdirect.slack.com/files/aneet.sachdeva/F2SP09A79/screen_shot_2016-10-21_at_3.04.03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "balloon",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2SM5N999",
            "timestamp": 1477083855,
            "name": "Pasted image at 2016_10_21 03_04 PM.png",
            "title": "ManDrill",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2KRMJ9MM",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SM5N999/pasted_image_at_2016_10_21_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SM5N999/download/pasted_image_at_2016_10_21_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SM5N999-ba56d8222a/pasted_image_at_2016_10_21_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SM5N999-ba56d8222a/pasted_image_at_2016_10_21_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SM5N999-ba56d8222a/pasted_image_at_2016_10_21_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2SM5N999-ba56d8222a/pasted_image_at_2016_10_21_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2SM5N999-ba56d8222a/pasted_image_at_2016_10_21_03_04_pm_1024.png",
            "original_w": 1055,
            "original_h": 645,
            "permalink": "https://appdirect.slack.com/files/arnold.padillo/F2SM5N999/pasted_image_at_2016_10_21_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "star",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2SP5V8RG",
            "timestamp": 1477083844,
            "name": "Screen Shot 2016-10-21 at 3.03.42 PM.png",
            "title": "Screen Shot 2016-10-21 at 3.03.42 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SP5V8RG/screen_shot_2016-10-21_at_3.03.42_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SP5V8RG/download/screen_shot_2016-10-21_at_3.03.42_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SP5V8RG-af3b01f227/screen_shot_2016-10-21_at_3.03.42_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SP5V8RG-af3b01f227/screen_shot_2016-10-21_at_3.03.42_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SP5V8RG-af3b01f227/screen_shot_2016-10-21_at_3.03.42_pm_160.png",
            "original_w": 701,
            "original_h": 459,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F2SP5V8RG/screen_shot_2016-10-21_at_3.03.42_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U2A3TTW4V",
                        "U27DJ3JT0",
                        "U2PKVNC87"
                    ],
                    "count": 3
                },
                {
                    "name": "notbad",
                    "users": [
                        "U2PG17XKJ"
                    ],
                    "count": 1
                },
                {
                    "name": "party-parrot",
                    "users": [
                        "U0J6ZJTDM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2SP5U7C2",
            "timestamp": 1477083838,
            "name": "mandrill.jpg",
            "title": "mandrill.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SP5U7C2/mandrill.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SP5U7C2/download/mandrill.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SP5U7C2-c7479bff0a/mandrill_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SP5U7C2-c7479bff0a/mandrill_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SP5U7C2-c7479bff0a/mandrill_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2SP5U7C2-c7479bff0a/mandrill_720.jpg",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F2SP5U7C2/mandrill.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2SNZRABH",
            "timestamp": 1477083826,
            "name": "Screen Shot 2016-10-21 at 3.03.17 PM.png",
            "title": "Screen Shot 2016-10-21 at 3.03.17 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SNZRABH/screen_shot_2016-10-21_at_3.03.17_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SNZRABH/download/screen_shot_2016-10-21_at_3.03.17_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZRABH-39af69e6b0/screen_shot_2016-10-21_at_3.03.17_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZRABH-39af69e6b0/screen_shot_2016-10-21_at_3.03.17_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZRABH-39af69e6b0/screen_shot_2016-10-21_at_3.03.17_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZRABH-39af69e6b0/screen_shot_2016-10-21_at_3.03.17_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZRABH-39af69e6b0/screen_shot_2016-10-21_at_3.03.17_pm_1024.png",
            "original_w": 1198,
            "original_h": 940,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F2SNZRABH/screen_shot_2016-10-21_at_3.03.17_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2HN6FYRM"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2SNZNPRD",
            "timestamp": 1477083810,
            "name": "Screen Shot 2016-10-21 at 3.03.16 PM.png",
            "title": "goku?",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SNZNPRD/screen_shot_2016-10-21_at_3.03.16_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SNZNPRD/download/screen_shot_2016-10-21_at_3.03.16_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZNPRD-25ecbfd98d/screen_shot_2016-10-21_at_3.03.16_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZNPRD-25ecbfd98d/screen_shot_2016-10-21_at_3.03.16_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZNPRD-25ecbfd98d/screen_shot_2016-10-21_at_3.03.16_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZNPRD-25ecbfd98d/screen_shot_2016-10-21_at_3.03.16_pm_720.png",
            "original_w": 631,
            "original_h": 765,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F2SNZNPRD/screen_shot_2016-10-21_at_3.03.16_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2SNZFF39",
            "timestamp": 1477083786,
            "name": "Pasted image at 2016_10_21 03_03 PM.png",
            "title": "Pasted image at 2016-10-21, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13GTGD7G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SNZFF39/pasted_image_at_2016_10_21_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SNZFF39/download/pasted_image_at_2016_10_21_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZFF39-717fdced9f/pasted_image_at_2016_10_21_03_03_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZFF39-717fdced9f/pasted_image_at_2016_10_21_03_03_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SNZFF39-717fdced9f/pasted_image_at_2016_10_21_03_03_pm_160.png",
            "original_w": 506,
            "original_h": 543,
            "permalink": "https://appdirect.slack.com/files/tom.schoendorfer/F2SNZFF39/pasted_image_at_2016_10_21_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "+1",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2SNNB03A",
            "timestamp": 1477083779,
            "name": "Screen Shot 2016-10-21 at 3.02.48 PM.png",
            "title": "Screen Shot 2016-10-21 at 3.02.48 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SNNB03A/screen_shot_2016-10-21_at_3.02.48_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SNNB03A/download/screen_shot_2016-10-21_at_3.02.48_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SNNB03A-f6507332fa/screen_shot_2016-10-21_at_3.02.48_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SNNB03A-f6507332fa/screen_shot_2016-10-21_at_3.02.48_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SNNB03A-f6507332fa/screen_shot_2016-10-21_at_3.02.48_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2SNNB03A-f6507332fa/screen_shot_2016-10-21_at_3.02.48_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2SNNB03A-f6507332fa/screen_shot_2016-10-21_at_3.02.48_pm_1024.png",
            "original_w": 1116,
            "original_h": 806,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F2SNNB03A/screen_shot_2016-10-21_at_3.02.48_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2SNUQ2LV",
            "timestamp": 1477083755,
            "name": "Pasted image at 2016_10_21 03_02 PM.png",
            "title": "Pasted image at 2016-10-21, 3:02 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2SNUQ2LV/pasted_image_at_2016_10_21_03_02_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2SNUQ2LV/download/pasted_image_at_2016_10_21_03_02_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2SNUQ2LV-29cef4c28e/pasted_image_at_2016_10_21_03_02_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2SNUQ2LV-29cef4c28e/pasted_image_at_2016_10_21_03_02_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2SNUQ2LV-29cef4c28e/pasted_image_at_2016_10_21_03_02_pm_160.png",
            "original_w": 467,
            "original_h": 519,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F2SNUQ2LV/pasted_image_at_2016_10_21_03_02_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U2PG17XKJ"
                    ],
                    "count": 1
                },
                {
                    "name": "crying_cat_face",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2PM5CB33",
            "timestamp": 1476480579,
            "name": "TRexDrawing.jpg",
            "title": "TRexDrawing.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U27CJCFA9",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PM5CB33/trexdrawing.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PM5CB33/download/trexdrawing.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PM5CB33-5b3cac9bb9/trexdrawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PM5CB33-5b3cac9bb9/trexdrawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PM5CB33-5b3cac9bb9/trexdrawing_160.jpg",
            "original_w": 594,
            "original_h": 398,
            "permalink": "https://appdirect.slack.com/files/ethan.hawthorne/F2PM5CB33/trexdrawing.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2PMA6HDY",
            "timestamp": 1476480487,
            "name": "TRexDrawing.jpg",
            "title": "TRexDrawing.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U27CJCFA9",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PMA6HDY/trexdrawing.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PMA6HDY/download/trexdrawing.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PMA6HDY-89c11317df/trexdrawing_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PMA6HDY-89c11317df/trexdrawing_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PMA6HDY-89c11317df/trexdrawing_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PMA6HDY-89c11317df/trexdrawing_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2PMA6HDY-89c11317df/trexdrawing_1024.jpg",
            "original_w": 1152,
            "original_h": 648,
            "permalink": "https://appdirect.slack.com/files/ethan.hawthorne/F2PMA6HDY/trexdrawing.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        },
        {
            "id": "F2PLX233K",
            "timestamp": 1476479260,
            "name": "Untitled__.jpg",
            "title": "Untitled__.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U211SR63A",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLX233K/untitled__.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLX233K/download/untitled__.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLX233K-5096af118e/untitled___360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLX233K-5096af118e/untitled___480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLX233K-5096af118e/untitled___160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PLX233K-5096af118e/untitled___720.jpg",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/rita.bereski/F2PLX233K/untitled__.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "rainbow",
                    "users": [
                        "U2PG17XKJ",
                        "U2DU3TZL7",
                        "U0ZV9NY93",
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 5
                },
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2PLWDM2B",
            "timestamp": 1476479246,
            "name": "Pasted image at 2016_10_14 03_07 PM.png",
            "title": "Pasted image at 2016-10-14, 3:07 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U211SR63A",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLWDM2B/pasted_image_at_2016_10_14_03_07_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLWDM2B/download/pasted_image_at_2016_10_14_03_07_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLWDM2B-2f02c55726/pasted_image_at_2016_10_14_03_07_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLWDM2B-2f02c55726/pasted_image_at_2016_10_14_03_07_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLWDM2B-2f02c55726/pasted_image_at_2016_10_14_03_07_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PLWDM2B-2f02c55726/pasted_image_at_2016_10_14_03_07_pm_720.png",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/rita.bereski/F2PLWDM2B/pasted_image_at_2016_10_14_03_07_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2PLRL4GM",
            "timestamp": 1476479192,
            "name": "Capture.JPG",
            "title": "Capture.JPG",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2G4XKRRU",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLRL4GM/capture.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLRL4GM/download/capture.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLRL4GM-06d0feba48/capture_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLRL4GM-06d0feba48/capture_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLRL4GM-06d0feba48/capture_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PLRL4GM-06d0feba48/capture_720.jpg",
            "original_w": 721,
            "original_h": 415,
            "permalink": "https://appdirect.slack.com/files/katherine.craig/F2PLRL4GM/capture.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "canada",
                    "users": [
                        "U08P10WPQ",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "+1",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2PLJQ3B2",
            "timestamp": 1476479156,
            "name": "Pasted image at 2016_10_14 03_05 PM.png",
            "title": "Pasted image at 2016-10-14, 3:05 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKLJ160",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLJQ3B2/pasted_image_at_2016_10_14_03_05_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLJQ3B2/download/pasted_image_at_2016_10_14_03_05_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLJQ3B2-9aa56098f6/pasted_image_at_2016_10_14_03_05_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLJQ3B2-9aa56098f6/pasted_image_at_2016_10_14_03_05_pm_160.png",
            "original_w": 378,
            "original_h": 208,
            "permalink": "https://appdirect.slack.com/files/stewart.schneider/F2PLJQ3B2/pasted_image_at_2016_10_14_03_05_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "grinning",
                    "users": [
                        "U27C9U673",
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F2PK1MEKV",
            "timestamp": 1476479108,
            "name": "Screen Shot 2016-10-14 at 3.04.38 PM.png",
            "title": "Screen Shot 2016-10-14 at 3.04.38 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U21BYUQ1Z",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PK1MEKV/screen_shot_2016-10-14_at_3.04.38_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PK1MEKV/download/screen_shot_2016-10-14_at_3.04.38_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PK1MEKV-5d0b4d60f0/screen_shot_2016-10-14_at_3.04.38_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PK1MEKV-5d0b4d60f0/screen_shot_2016-10-14_at_3.04.38_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PK1MEKV-5d0b4d60f0/screen_shot_2016-10-14_at_3.04.38_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PK1MEKV-5d0b4d60f0/screen_shot_2016-10-14_at_3.04.38_pm_720.png",
            "original_w": 807,
            "original_h": 518,
            "permalink": "https://appdirect.slack.com/files/pete.dean/F2PK1MEKV/screen_shot_2016-10-14_at_3.04.38_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "boom",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2PLVD5D5",
            "timestamp": 1476479107,
            "name": "Pasted image at 2016_10_14 03_04 PM.png",
            "title": "oh_canada_beaver",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2DU3TZL7",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLVD5D5/pasted_image_at_2016_10_14_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLVD5D5/download/pasted_image_at_2016_10_14_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVD5D5-53c6013c10/pasted_image_at_2016_10_14_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVD5D5-53c6013c10/pasted_image_at_2016_10_14_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVD5D5-53c6013c10/pasted_image_at_2016_10_14_03_04_pm_160.png",
            "original_w": 698,
            "original_h": 485,
            "permalink": "https://appdirect.slack.com/files/alfonso.munoz/F2PLVD5D5/pasted_image_at_2016_10_14_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "canada",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2PLVTTHP",
            "timestamp": 1476479099,
            "name": "Screen Shot 2016-10-14 at 2.04.35 PM.png",
            "title": "Keepin it Classy",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U054FNLPS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLVTTHP/screen_shot_2016-10-14_at_2.04.35_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLVTTHP/download/screen_shot_2016-10-14_at_2.04.35_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVTTHP-7937e218ca/screen_shot_2016-10-14_at_2.04.35_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVTTHP-7937e218ca/screen_shot_2016-10-14_at_2.04.35_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVTTHP-7937e218ca/screen_shot_2016-10-14_at_2.04.35_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVTTHP-7937e218ca/screen_shot_2016-10-14_at_2.04.35_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVTTHP-7937e218ca/screen_shot_2016-10-14_at_2.04.35_pm_1024.png",
            "original_w": 1072,
            "original_h": 1132,
            "permalink": "https://appdirect.slack.com/files/mathew.spolin/F2PLVTTHP/screen_shot_2016-10-14_at_2.04.35_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "flag-us",
                    "users": [
                        "U13FJA80G",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2PLQRN6R",
            "timestamp": 1476479075,
            "name": "Screen Shot 2016-10-14 at 3.04.14 PM.png",
            "title": "Screen Shot 2016-10-14 at 3.04.14 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U0ZV9NY93",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLQRN6R/screen_shot_2016-10-14_at_3.04.14_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLQRN6R/download/screen_shot_2016-10-14_at_3.04.14_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLQRN6R-b449d28858/screen_shot_2016-10-14_at_3.04.14_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLQRN6R-b449d28858/screen_shot_2016-10-14_at_3.04.14_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLQRN6R-b449d28858/screen_shot_2016-10-14_at_3.04.14_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PLQRN6R-b449d28858/screen_shot_2016-10-14_at_3.04.14_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2PLQRN6R-b449d28858/screen_shot_2016-10-14_at_3.04.14_pm_1024.png",
            "original_w": 1220,
            "original_h": 1132,
            "permalink": "https://appdirect.slack.com/files/chris.horne/F2PLQRN6R/screen_shot_2016-10-14_at_3.04.14_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "canada",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "four_leaf_clover",
                    "users": [
                        "U2PG17XKJ",
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F2PLJ7RR6",
            "timestamp": 1476479070,
            "name": "Pasted image at 2016_10_14 03_04 PM.png",
            "title": "Pasted image at 2016-10-14, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U13FJA80G",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLJ7RR6/pasted_image_at_2016_10_14_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLJ7RR6/download/pasted_image_at_2016_10_14_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLJ7RR6-c364623b21/pasted_image_at_2016_10_14_03_04_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLJ7RR6-c364623b21/pasted_image_at_2016_10_14_03_04_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLJ7RR6-c364623b21/pasted_image_at_2016_10_14_03_04_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PLJ7RR6-c364623b21/pasted_image_at_2016_10_14_03_04_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2PLJ7RR6-c364623b21/pasted_image_at_2016_10_14_03_04_pm_1024.png",
            "original_w": 750,
            "original_h": 1209,
            "permalink": "https://appdirect.slack.com/files/beau.calvez/F2PLJ7RR6/pasted_image_at_2016_10_14_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "hushed",
                    "users": [
                        "U2DU3TZL7",
                        "U2PG17XKJ"
                    ],
                    "count": 2
                },
                {
                    "name": "no_entry_sign",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2PM16K50",
            "timestamp": 1476479069,
            "name": "Screen Shot 2016-10-14 at 3.04.17 PM.png",
            "title": "Screen Shot 2016-10-14 at 3.04.17 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1324MZRS",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PM16K50/screen_shot_2016-10-14_at_3.04.17_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PM16K50/download/screen_shot_2016-10-14_at_3.04.17_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PM16K50-4cb0935837/screen_shot_2016-10-14_at_3.04.17_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PM16K50-4cb0935837/screen_shot_2016-10-14_at_3.04.17_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PM16K50-4cb0935837/screen_shot_2016-10-14_at_3.04.17_pm_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PM16K50-4cb0935837/screen_shot_2016-10-14_at_3.04.17_pm_720.png",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2PM16K50-4cb0935837/screen_shot_2016-10-14_at_3.04.17_pm_1024.png",
            "original_w": 1270,
            "original_h": 1250,
            "permalink": "https://appdirect.slack.com/files/rahul.bir/F2PM16K50/screen_shot_2016-10-14_at_3.04.17_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "slightly_smiling_face",
                    "users": [
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2PLVP0EM",
            "timestamp": 1476479067,
            "name": "appdevices-mascot.png",
            "title": "appdevices-mascot.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U1000HJ8H",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLVP0EM/appdevices-mascot.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLVP0EM/download/appdevices-mascot.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVP0EM-2610e415a9/appdevices-mascot_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVP0EM-2610e415a9/appdevices-mascot_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVP0EM-2610e415a9/appdevices-mascot_160.png",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVP0EM-2610e415a9/appdevices-mascot_720.png",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/ian.ong/F2PLVP0EM/appdevices-mascot.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "party-parrot",
                    "users": [
                        "U2PG17XKJ",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "chipmunk",
                    "users": [
                        "U2A3TTW4V"
                    ],
                    "count": 1
                },
                {
                    "name": "question",
                    "users": [
                        "U08P10WPQ",
                        "U2PKR3B2S",
                        "U2PG17XKJ"
                    ],
                    "count": 3
                },
                {
                    "name": "appdirect",
                    "users": [
                        "U1000HJ8H"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2PLVLDFB",
            "timestamp": 1476479057,
            "name": "Untitled__.jpg",
            "title": "Hockey Playing Beaver in the Mountains.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2PKR3B2S",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLVLDFB/untitled__.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLVLDFB/download/untitled__.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVLDFB-1a41dceda4/untitled___360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVLDFB-1a41dceda4/untitled___480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVLDFB-1a41dceda4/untitled___160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVLDFB-1a41dceda4/untitled___720.jpg",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/darnell.shinbine/F2PLVLDFB/untitled__.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "heart",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7",
                        "U08P10WPQ"
                    ],
                    "count": 3
                }
            ]
        },
        {
            "id": "F2PM13750",
            "timestamp": 1476479056,
            "name": "Pasted image at 2016_10_14 03_04 PM.png",
            "title": "late start effort...",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U27DJ3JT0",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PM13750/pasted_image_at_2016_10_14_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PM13750/download/pasted_image_at_2016_10_14_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PM13750-61542ba095/pasted_image_at_2016_10_14_03_04_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PM13750-61542ba095/pasted_image_at_2016_10_14_03_04_pm_160.png",
            "original_w": 461,
            "original_h": 311,
            "permalink": "https://appdirect.slack.com/files/craig.hay/F2PM13750/pasted_image_at_2016_10_14_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "question",
                    "users": [
                        "U27C9U673",
                        "U13FJA80G",
                        "U2DU3TZL7",
                        "U2PKR3B2S",
                        "U2PG17XKJ",
                        "U08P10WPQ"
                    ],
                    "count": 6
                }
            ]
        },
        {
            "id": "F2PLQLU93",
            "timestamp": 1476479054,
            "name": "Pasted image at 2016_10_14 03_04 PM.png",
            "title": "Pasted image at 2016-10-14, 3:04 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2LRV79LN",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLQLU93/pasted_image_at_2016_10_14_03_04_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLQLU93/download/pasted_image_at_2016_10_14_03_04_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLQLU93-225c26bada/pasted_image_at_2016_10_14_03_04_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLQLU93-225c26bada/pasted_image_at_2016_10_14_03_04_pm_160.png",
            "original_w": 396,
            "original_h": 320,
            "permalink": "https://appdirect.slack.com/files/mark.ehlert/F2PLQLU93/pasted_image_at_2016_10_14_03_04_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2PK19EM9",
            "timestamp": 1476479048,
            "name": "Screen Shot 2016-10-14 at 3.03.59 PM.png",
            "title": "Screen Shot 2016-10-14 at 3.03.59 PM.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PG17XKJ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PK19EM9/screen_shot_2016-10-14_at_3.03.59_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PK19EM9/download/screen_shot_2016-10-14_at_3.03.59_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PK19EM9-c7263ef834/screen_shot_2016-10-14_at_3.03.59_pm_360.png",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PK19EM9-c7263ef834/screen_shot_2016-10-14_at_3.03.59_pm_480.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PK19EM9-c7263ef834/screen_shot_2016-10-14_at_3.03.59_pm_160.png",
            "original_w": 392,
            "original_h": 518,
            "permalink": "https://appdirect.slack.com/files/michael.nguyen/F2PK19EM9/screen_shot_2016-10-14_at_3.03.59_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "smiley",
                    "users": [
                        "U13FJA80G",
                        "U2DU3TZL7"
                    ],
                    "count": 2
                },
                {
                    "name": "ice_hockey_stick_and_puck",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2PK18MQT",
            "timestamp": 1476479043,
            "name": "Pasted image at 2016_10_14 03_03 PM.png",
            "title": "Pasted image at 2016-10-14, 3:03 PM",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2A6BJ71Q",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PK18MQT/pasted_image_at_2016_10_14_03_03_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PK18MQT/download/pasted_image_at_2016_10_14_03_03_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PK18MQT-2cd9dc3cc5/pasted_image_at_2016_10_14_03_03_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PK18MQT-2cd9dc3cc5/pasted_image_at_2016_10_14_03_03_pm_160.png",
            "original_w": 312,
            "original_h": 302,
            "permalink": "https://appdirect.slack.com/files/scott.thomson/F2PK18MQT/pasted_image_at_2016_10_14_03_03_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2PLVGAJV",
            "timestamp": 1476479043,
            "name": "Screen Shot 2016-10-14 at 3.03.14 PM.png",
            "title": "nickel.png",
            "mimetype": "image/png",
            "filetype": "png",
            "pretty_type": "PNG",
            "user": "U2PKVNC87",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLVGAJV/screen_shot_2016-10-14_at_3.03.14_pm.png",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLVGAJV/download/screen_shot_2016-10-14_at_3.03.14_pm.png",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVGAJV-52901e1c1d/screen_shot_2016-10-14_at_3.03.14_pm_360.png",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLVGAJV-52901e1c1d/screen_shot_2016-10-14_at_3.03.14_pm_160.png",
            "original_w": 434,
            "original_h": 427,
            "permalink": "https://appdirect.slack.com/files/paul.jeffery/F2PLVGAJV/screen_shot_2016-10-14_at_3.03.14_pm.png",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc2PLE766Q",
                "timestamp": 1476479043,
                "user": "U2PKVNC87",
                "is_intro": true,
                "comment": "Nickelback? front?"
            },
            "reactions": [
                {
                    "name": "money_mouth_face",
                    "users": [
                        "U2PG17XKJ",
                        "U13FJA80G"
                    ],
                    "count": 2
                },
                {
                    "name": "fist",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                },
                {
                    "name": "heavy_dollar_sign",
                    "users": [
                        "U08P10WPQ"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2PK17AEP",
            "timestamp": 1476479033,
            "name": "beaver.jpg",
            "title": "beaver.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U08P10WPQ",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PK17AEP/beaver.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PK17AEP/download/beaver.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PK17AEP-6c13d4b00a/beaver_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PK17AEP-6c13d4b00a/beaver_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PK17AEP-6c13d4b00a/beaver_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PK17AEP-6c13d4b00a/beaver_720.jpg",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/joey.fournier/F2PK17AEP/beaver.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 1,
            "initial_comment": {
                "id": "Fc2PLQGL4D",
                "timestamp": 1476479033,
                "user": "U08P10WPQ",
                "is_intro": true,
                "comment": "a modest never nude candian beaver"
            },
            "reactions": [
                {
                    "name": "joy",
                    "users": [
                        "U29KAMLAK",
                        "U2DU3TZL7",
                        "U13FJA80G",
                        "U2PG17XKJ"
                    ],
                    "count": 4
                },
                {
                    "name": "trophy",
                    "users": [
                        "U27C9U673",
                        "U13FJA80G"
                    ],
                    "count": 2
                }
            ]
        },
        {
            "id": "F2PLUTVUP",
            "timestamp": 1476479028,
            "name": "beaver.jpg",
            "title": "beaver.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U2A3TTW4V",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLUTVUP/beaver.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLUTVUP/download/beaver.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLUTVUP-c6d76f71cc/beaver_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLUTVUP-c6d76f71cc/beaver_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLUTVUP-c6d76f71cc/beaver_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PLUTVUP-c6d76f71cc/beaver_720.jpg",
            "original_w": 800,
            "original_h": 600,
            "permalink": "https://appdirect.slack.com/files/kammryn.dancy/F2PLUTVUP/beaver.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0,
            "reactions": [
                {
                    "name": "raised_hands",
                    "users": [
                        "U13FJA80G"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "id": "F2PLUJ2HX",
            "timestamp": 1476478902,
            "name": "Very patriotic.jpg",
            "title": "Very patriotic.jpg",
            "mimetype": "image/jpeg",
            "filetype": "jpg",
            "pretty_type": "JPEG",
            "user": "U29KAMLAK",
            "username": "",
            "url_private": "https://files.slack.com/files-pri/T04V96SJW-F2PLUJ2HX/very_patriotic.jpg",
            "url_private_download": "https://files.slack.com/files-pri/T04V96SJW-F2PLUJ2HX/download/very_patriotic.jpg",
            "thumb_360": "https://files.slack.com/files-tmb/T04V96SJW-F2PLUJ2HX-574fba5b89/very_patriotic_360.jpg",
            "thumb_480": "https://files.slack.com/files-tmb/T04V96SJW-F2PLUJ2HX-574fba5b89/very_patriotic_480.jpg",
            "thumb_160": "https://files.slack.com/files-tmb/T04V96SJW-F2PLUJ2HX-574fba5b89/very_patriotic_160.jpg",
            "thumb_720": "https://files.slack.com/files-tmb/T04V96SJW-F2PLUJ2HX-574fba5b89/very_patriotic_720.jpg",
            "thumb_1024": "https://files.slack.com/files-tmb/T04V96SJW-F2PLUJ2HX-574fba5b89/very_patriotic_1024.jpg",
            "original_w": 1300,
            "original_h": 1269,
            "permalink": "https://appdirect.slack.com/files/jennifer.aubin/F2PLUJ2HX/very_patriotic.jpg",
            "channels": [
                "C2PJB6QC9"
            ],
            "groups": [],
            "ims": [],
            "comments_count": 0
        }
    ]
};


function getDateCode(drawing) {
	return moment(drawing.timestamp, 'X').format('YYYYMMDD');
}

function getDrawingsStub(filter = {}) {
	let filters = [];
		if (filter.user) {
			filters.push((drawing) => (drawing.user === filter.user));
		}
		if (filter.username) {
			let user = 	users.getUserByUsername(filter.username);
			filters.push((drawing) => (drawing.user === user.id));
		}
		if (filter.animal) {
			filters.push((drawing) => (getDateCode(drawing) === animals.getDateCodeByAnimal(filter.animal)));
		}
		return new Promise((resolve, reject) => {
			let results = drawings.files.filter((drawing) => (filters.every((appliedFilter) => !!appliedFilter(drawing))));
			resolve(results);
		});
}

export default {
	getDrawingById: function(fileId) {
		return drawings.files.find((drawing) => (drawing.id === fileId));
	},

	getDrawingsByUserId: function(userId) {
		return drawings.files.filter((drawing) => (drawing.user === userId));
	},

	getHumanReadableTimestamp: function(drawing) {
		return moment(drawing.timestamp, 'X').format('MMMM D, YYYY');
	},

	getDateCode: getDateCode,

	getDrawings(filter = {}) {
		if (ApiConstants.USE_STUBBED_DATA) {
			return getDrawingsStub(filter);
		}
		const queryString = QueryString.stringify(filter);

		return fetch(`${ApiConstants.API_BASE_URL}?${queryString}`, {
			method: 'GET'
		})
        .then((response) => (response.json()))
        .then((responseBody) => (responseBody.files));
	}
}