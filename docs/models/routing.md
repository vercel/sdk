# Routing

Groups of path expressions that are routed to this application. See https://vercel.com/docs/microfrontends/path-routing.

## Example Usage

```typescript
import { Routing } from "@vercel/sdk/models/getmicrofrontendsconfigop.js";

let value: Routing = {
  paths: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `group`                                                                                                                                                                | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | Group name for the paths.                                                                                                                                              |
| `flag`                                                                                                                                                                 | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | The name of the feature flag that controls routing for this group of paths. See https://vercel.com/docs/microfrontends/path-routing#routing-changes-safely-with-flags. |
| `paths`                                                                                                                                                                | *string*[]                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                     | A list of path expressions that are routed to this application. See https://vercel.com/docs/microfrontends/path-routing#supported-path-expressions.                    |