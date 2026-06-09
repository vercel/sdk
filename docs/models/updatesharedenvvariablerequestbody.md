# UpdateSharedEnvVariableRequestBody

## Example Usage

```typescript
import { UpdateSharedEnvVariableRequestBody } from "@vercel/sdk/models/updatesharedenvvariableop.js";

let value: UpdateSharedEnvVariableRequestBody = {
  updates: {
    "env_2WjyKQmM8ZnGcJsPWMrHRHrE": {
      key: "API_URL",
      value: "https://api.vercel.com",
      target: [
        "production",
        "preview",
      ],
      projectIdUpdates: {
        link: [
          "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            | Example                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `updates`                                                                                                                                                                                              | Record<string, [models.Updates](../models/updates.md)>                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                     | An object where each key is an environment variable ID (not the key name) and the value is the update to apply                                                                                         | {<br/>"env_2WjyKQmM8ZnGcJsPWMrHRHrE": {<br/>"key": "API_URL",<br/>"value": "https://api.vercel.com",<br/>"target": [<br/>"production",<br/>"preview"<br/>],<br/>"projectIdUpdates": {<br/>"link": [<br/>"prj_2WjyKQmM8ZnGcJsPWMrHRHrE"<br/>]<br/>}<br/>}<br/>} |