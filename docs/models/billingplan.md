# BillingPlan

Billing profile of the organization link: how this team settles within the organization. This is not the team's billing.plan or planIteration. Links with `enterprise` billing participate in organization-level billing and usage rollups. This field is optional for legacy links that have no stored profile.

## Example Usage

```typescript
import { BillingPlan } from "@vercel/sdk/models/organizationteamlistitem.js";

let value: BillingPlan = "enterprise";
```

## Values

```typescript
"enterprise" | "platform"
```