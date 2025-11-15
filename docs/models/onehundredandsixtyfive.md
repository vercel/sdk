# OneHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFive } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixtyFive = {
  appName: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `appName`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The App's name at the moment this even was published (it may have changed since then).                                               |
| `appId`                                                                                                                              | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The App's ID. Note that not all historical events have this field.                                                                   |
| `app`                                                                                                                                | [models.App](../models/app.md)                                                                                                       | :heavy_minus_sign:                                                                                                                   | Note that not all historical events have this field.                                                                                 |
| `issuedBefore`                                                                                                                       | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | UNIX timestamp in seconds. Tokens issued before this timestamp will be revoked. Note that not all historical events have this field. |