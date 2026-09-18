# Sixty

The payload of the event, if requested.

## Example Usage

```typescript
import { Sixty } from "@vercel/sdk/models/thirtythree.js";

let value: Sixty = {
  appName: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `app`                                                                                                                                | [models.App](../models/app.md)                                                                                                       | :heavy_minus_sign:                                                                                                                   | Note that not all historical events have this field.                                                                                 |
| `appId`                                                                                                                              | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The App's ID. Note that not all historical events have this field.                                                                   |
| `appName`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The App's name at the moment this even was published (it may have changed since then).                                               |
| `issuedBefore`                                                                                                                       | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | UNIX timestamp in seconds. Tokens issued before this timestamp will be revoked. Note that not all historical events have this field. |