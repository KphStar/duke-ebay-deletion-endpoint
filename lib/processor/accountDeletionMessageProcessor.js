/*
 * *
 *  * Copyright 2021 eBay Inc.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *  http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *  *
 */

'use strict';

/**
 * Process the message
 *
 * @param {JSON} message
 */
const processInternal = (message) => {
    const data = message?.notification?.data;
 if (data && data.userId && data.username) {
  // eslint-disable-next-line no-console
  console.log(`\n==========================\nUser ID: ${data.userId}`);
  // eslint-disable-next-line no-console
  console.log(`Username: ${data.username}\n==========================\n`);
} else {
  // eslint-disable-next-line no-console
  console.warn('Notification data is missing or incomplete:', data);
}
};

module.exports = { process: processInternal };
