import { useOrganizations } from "@decocms/sdk";
import { TopbarSwitcher } from "@deco/ui/components/topbar-switcher.tsx";
import { Suspense, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { CreateOrganizationDialog } from "../sidebar/create-team-dialog";
import { SwitcherProjects } from "./project-switcher";

export function BreadcrumbOrgSwitcher() {
  const { org } = useParams();
  const organizations = useOrganizations();
  const navigate = useNavigate();
  const currentOrg = useMemo(
    () => organizations.data?.find((organization) => organization.slug === org),
    [organizations.data, org],
  );

  const [orgSearch, setOrgSearch] = useState("");
  const [projectSearch, setProjectSearch] = useState("");
  const [hoveredOrg, setHoveredOrg] = useState<string | null>(
    currentOrg?.slug ?? null,
  );
  const [creatingOrganization, setCreatingOrganization] = useState(false);

  const filteredOrganizations = useMemo(() => {
    if (!organizations.data) return [];
    const filtered = organizations.data.filter((organization) =>
      organization.name.toLowerCase().includes(orgSearch.toLowerCase()),
    );
    // Move currentOrg (by slug) to the front if present
    if (org) {
      const idx = filtered.findIndex((o) => o.slug === org);
      if (idx > 0) {
        const current = filtered[idx];
        if (current) {
          filtered.splice(idx, 1);
          filtered.unshift(current);
        }
      }
    }
    return filtered;
  }, [organizations.data, orgSearch, org]);

  // Map SDK org shape to TopbarSwitcher entity shape
  const mappedOrgs = useMemo(
    () =>
      filteredOrganizations.map((o) => ({
        slug: o.slug,
        name: o.name,
        avatarUrl: o.avatar_url,
      })),
    [filteredOrganizations],
  );

  const mappedCurrentOrg = currentOrg
    ? {
        slug: currentOrg.slug,
        name: currentOrg.name,
        avatarUrl: currentOrg.avatar_url,
      }
    : undefined;

  return (
    <>
      <TopbarSwitcher onItemHover={(slug) => setHoveredOrg(slug)}>
        <TopbarSwitcher.Trigger onClick={() => navigate(`/${org}`)}>
          <Link to={`/${org}`} className="flex items-center gap-2">
            <TopbarSwitcher.CurrentItem
              item={mappedCurrentOrg}
              fallback={org}
            />
          </Link>
        </TopbarSwitcher.Trigger>

        <TopbarSwitcher.Content>
          {/* Left panel - Organizations */}
          <TopbarSwitcher.Panel>
            <TopbarSwitcher.Search
              placeholder="Search organizations..."
              value={orgSearch}
              onChange={setOrgSearch}
            />

            <TopbarSwitcher.Items emptyMessage="No organizations found.">
              {mappedOrgs.map((organization) => (
                <TopbarSwitcher.Item
                  key={organization.slug}
                  item={organization}
                  onClick={() => navigate(`/${organization.slug}`)}
                  onHover={(item) => setHoveredOrg(item.slug)}
                />
              ))}
            </TopbarSwitcher.Items>

            <TopbarSwitcher.Actions>
              <TopbarSwitcher.Action
                onClick={() => setCreatingOrganization(true)}
                variant="muted"
              >
                + Create organization
              </TopbarSwitcher.Action>
            </TopbarSwitcher.Actions>

            <TopbarSwitcher.Separator />

            <TopbarSwitcher.Actions>
              <TopbarSwitcher.Action
                onClick={() => navigate("/")}
                icon="grid_view"
              >
                See all organizations
              </TopbarSwitcher.Action>
              <TopbarSwitcher.Action
                onClick={() => navigate(`/${org}/settings`)}
                icon="settings"
              >
                Settings
              </TopbarSwitcher.Action>
            </TopbarSwitcher.Actions>
          </TopbarSwitcher.Panel>

          {/* Right panel - Projects */}
          <TopbarSwitcher.Panel>
            <TopbarSwitcher.Search
              placeholder="Search projects..."
              value={projectSearch}
              onChange={setProjectSearch}
            />

            {hoveredOrg && (
              <Suspense fallback={<SwitcherProjects.Skeleton />}>
                <SwitcherProjects org={hoveredOrg} search={projectSearch} />
              </Suspense>
            )}
          </TopbarSwitcher.Panel>
        </TopbarSwitcher.Content>
      </TopbarSwitcher>

      <CreateOrganizationDialog
        open={creatingOrganization}
        onOpenChange={setCreatingOrganization}
      />
    </>
  );
}

BreadcrumbOrgSwitcher.Skeleton = TopbarSwitcher.Skeleton;
