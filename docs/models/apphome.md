# AppHome

App Home settings for the managed Slack app. Updates preserve omitted settings.

## Example Usage

```typescript
import { AppHome } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: AppHome = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `homeTabEnabled`                                                       | *boolean*                                                              | :heavy_minus_sign:                                                     | Enable the Home tab for views.publish. Defaults to false for new apps. |
| `messagesTabEnabled`                                                   | *boolean*                                                              | :heavy_minus_sign:                                                     | Enable the Messages tab. Defaults to true for new apps.                |
| `messagesTabReadOnlyEnabled`                                           | *boolean*                                                              | :heavy_minus_sign:                                                     | Make the Messages tab read-only. Defaults to false for new apps.       |